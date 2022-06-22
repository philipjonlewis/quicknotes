import { useState } from "react";
import { supabase } from "../components/authentication/supabaseClient";

const LogIn = () => {
  const [loading, setLoading] = useState(false);
  const [email, setEmail] = useState("");

  const handleLogin = async (e: any) => {
    e.preventDefault();

    try {
      console.log(email);
      setLoading(true);
      console.log(await supabase.auth.signIn({ email }));
      const { error } = await supabase.auth.signIn({ email });

      if (error) throw error;
      alert("Check your email for the login link!");
    } catch (error: any) {
      console.log(error);
      alert(error.error_description || error.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="row flex flex-center">
      <div className="col-6 form-widget" aria-live="polite">
        <h1 className="header">Supabase + React</h1>
        <p className="description">
          Sign in via magic link with your email below
        </p>
        {loading ? (
          "Sending magic link..."
        ) : (
          <form onSubmit={handleLogin}>
            <label htmlFor="email">Email</label>
            <input
              id="email"
              className="inputField"
              type="email"
              placeholder="Your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <button className="button block" aria-live="polite">
              Send magic link
            </button>
          </form>
        )}
      </div>
    </div>
  );
};

export default LogIn;
