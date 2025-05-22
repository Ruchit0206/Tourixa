function SuccessPage({ resetForm }) {
  return (
    <div style={{ textAlign: 'center' }}>
      <h2 style={{ color: '#00796b' }}>🎉 Thank you!</h2>
      <p>Your travel inquiry has been submitted successfully.</p>
      <button onClick={resetForm} style={{
        marginTop: '20px',
        padding: '10px 20px',
        backgroundColor: '#00796b',
        color: 'white',
        border: 'none',
        borderRadius: '6px',
        cursor: 'pointer'
      }}>
        Submit Another Inquiry
      </button>
    </div>
  );
}
export default SuccessPage;
