/**
 * Utility functions for managing form submissions locally
 * This is a temporary solution to store form data as JSON instead of using Google Sheets
 */

import { supabase } from './supabase'

/**
 * Save a form submission to Supabase
 * @param {Object} formData - The form data to save
 * @returns {Promise} - Promise that resolves with the saved submission
 */
export const saveFormSubmission = async (formData) => {
  try {
    // Format the data to match Supabase column names
    const submissionData = {
      name: formData.name.trim(),
      company: formData.company.trim(),
      email: formData.email.trim(),
      phone: formData.phone?.trim() || null,
      project_type: formData.projectType,
      description: formData.description.trim(),
      budget: formData.budget || null,
      timeline: formData.timeline || null,
      source: formData.source || null,
      created_at: new Date().toISOString()
    };
    
    // Insert data into Supabase without requesting the data back
    const { error } = await supabase
      .from('contact_submissions')
      .insert([submissionData]);
    
    if (error) {
      console.error('Supabase error:', error);
      if (error.code === '42501') {
        throw new Error('Permission denied. Please try again later.');
      } else if (error.code === '23505') {
        throw new Error('This submission already exists.');
      } else {
        throw new Error(error.message || 'Failed to save form data');
      }
    }
    
    // Return the submitted data since the insert was successful
    return submissionData;
  } catch (error) {
    console.error('Error saving form data:', error);
    throw new Error(error.message || 'Failed to save form data. Please try again.');
  }
};

/**
 * Get all form submissions from Supabase
 * @returns {Promise} - Promise that resolves with array of all form submissions
 */
export const getAllFormSubmissions = async () => {
  try {
    const { data, error } = await supabase
      .from('contact_submissions')
      .select('*')
      .order('created_at', { ascending: false });
    
    if (error) {
      console.error('Supabase error:', error);
      if (error.code === '42501') {
        throw new Error('Permission denied. Please sign in to view submissions.');
      } else {
        throw new Error(error.message || 'Failed to retrieve submissions');
      }
    }
    
    return data || [];
  } catch (error) {
    console.error('Error retrieving form submissions:', error);
    throw new Error(error.message || 'Failed to retrieve form submissions');
  }
};

/**
 * Export all form submissions as a downloadable JSON file
 */
export const exportSubmissionsAsJson = async () => {
  try {
    const submissions = await getAllFormSubmissions();
    if (!submissions || submissions.length === 0) {
      alert('No form submissions to export');
      return;
    }
    
    // Create a Blob with the JSON data
    const jsonData = JSON.stringify(submissions, null, 2);
    const blob = new Blob([jsonData], { type: 'application/json' });
    
    // Create a download link and trigger the download
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.download = `form_submissions_${new Date().toISOString().split('T')[0]}.json`;
    document.body.appendChild(link);
    link.click();
    
    // Clean up
    setTimeout(() => {
      document.body.removeChild(link);
      URL.revokeObjectURL(url);
    }, 100);
  } catch (error) {
    console.error('Error exporting submissions:', error);
    alert(error.message || 'Failed to export submissions');
  }
};