import React, { useRef, useState } from "react"
import { Form, Button, Card, Alert } from "react-bootstrap"
import   {auth} from '../Login/firebase'
import { Link } from "react-router-dom"
import loginstyles from '../Login/Login.module.css'

export default function ForgotPassword() {
  const emailRef = useRef()
 
  const [error, setError] = useState("")
  const [message, setMessage] = useState("")
  const [loading, setLoading] = useState(false)
 
  function resetPassword(email) {
    return auth.sendPasswordResetEmail(email)
  }
  async function handleSubmit(e) {
    e.preventDefault()

    try {
      setMessage("")
      setError("")
      setLoading(true)
      await resetPassword(emailRef.current.value)
      setMessage("Check your inbox for further instructions")
    } catch {
      setError("Failed to reset password")
    }

    setLoading(false)
  }

 
  return (
    <>
      <Card>
        <Card.Body>
          <h2 className="text-center mb-4">Password Reset</h2>
          {error && <Alert variant="danger">{error}</Alert>}
          {message && <Alert variant="success">{message}</Alert>}
          <Form onSubmit={handleSubmit}>
            <Form.Group id="email">
              <Form.Label>Email</Form.Label>
              <Form.Control type="email" ref={emailRef} required />
            </Form.Group>
            <br/>
            <Button disabled={loading} className="w-100" type="submit">
              Reset Password
            </Button>
            <br/>
          </Form>
          <div className="w-100 text-center mt-3">
            <Link to="/login"><button className={loginstyles.btn2log}>Login</button></Link>
          </div>
        </Card.Body>
      </Card>
      <div className="w-100 text-center mt-2">
        Need an account? <Link to="/signup"><button className={loginstyles.linkbutton}>Sign Up</button></Link>
      </div>
    </>
  )
}
