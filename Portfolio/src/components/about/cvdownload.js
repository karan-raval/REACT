document.getElementById('downloadBtn').addEventListener('click', function() {
  // Naya tab kholne ke liye
  window.open('/path-to-your-cv.pdf', '_blank'); // CV file ke liye path

  // CV ko automatic download karwane ke liye
  const link = document.createElement('a');
  link.href = '/path-to-your-cv.pdf'; // CV file ka path
  link.download = 'Karan_CV.pdf'; // Download hone wale file ka naam
  link.click();
});