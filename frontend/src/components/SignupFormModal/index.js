import React, { useState } from 'react';
import { Modal } from '../../store/context/Modal';
import SignupForm from './SignupForm';


function SignupFormModal() {
  const [showModal, setShowModal] = useState(false);

  return (
    <>
      <button className="btnSignup" onClick={() => setShowModal(true)}>Signup</button>
      {showModal && (
        <Modal onClose={() => setShowModal(false)}>
          <SignupForm />
        </Modal>
      )}
    </>
  );
}

export default SignupFormModal;