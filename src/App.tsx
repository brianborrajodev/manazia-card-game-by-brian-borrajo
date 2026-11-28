import { Link, Navigate, Route, Routes } from 'react-router-dom'
import loginArtwork from '../docs/design/manazia-login-page.png'
import './App.css'

function WelcomePage() {
  return (
    <main className="welcome-screen" style={{ backgroundImage: `url(${loginArtwork})` }}>
      <div className="welcome-vignette" />
      <section className="welcome-content" aria-labelledby="brand-title">
        <p className="eyebrow">Un juego de cartas y destino</p>
        <h1 id="brand-title">MANAZIA</h1>
        <div className="ornament" aria-hidden="true"><span /></div>
        <p className="tagline">Tu leyenda comienza con una carta.</p>
        <p className="intro">Elige cómo entrar al mundo de Manazia.</p>
        <nav className="welcome-actions" aria-label="Acceso al juego">
          <Link className="action-button action-primary" to="/guest">Jugar como invitado</Link>
          <Link className="action-button action-secondary" to="/login">Iniciar sesión / Registrarse</Link>
        </nav>
      </section>
      <span className="screen-corner corner-left" aria-hidden="true" />
      <span className="screen-corner corner-right" aria-hidden="true" />
    </main>
  )
}

function LoginPage() {
  return (
    <main className="simple-screen">
      <section className="simple-card">
        <p className="eyebrow">Tu leyenda te espera</p>
        <h1>Iniciar sesión</h1>
        <p className="intro">Accede a tu cuenta para continuar tu aventura.</p>
        <form className="login-form" onSubmit={(event) => event.preventDefault()}>
          <label htmlFor="email">Correo electrónico</label>
          <input id="email" name="email" type="email" autoComplete="email" placeholder="nombre@ejemplo.com" required />
          <label htmlFor="password">Contraseña</label>
          <input id="password" name="password" type="password" autoComplete="current-password" placeholder="Tu contraseña" required />
          <button className="action-button action-primary" type="submit">Entrar</button>
        </form>
        <p className="form-note">El acceso a cuentas estará disponible próximamente.</p>
        <Link className="back-link" to="/">Volver al inicio</Link>
      </section>
    </main>
  )
}

function GuestPage() {
  return (
    <main className="simple-screen">
      <section className="simple-card guest-card">
        <p className="eyebrow">La aventura comienza</p>
        <h1>Bienvenido a Manazia</h1>
        <p className="intro">Has entrado como invitado. La partida estará disponible próximamente.</p>
        <Link className="action-button action-primary" to="/">Volver al inicio</Link>
      </section>
    </main>
  )
}

function App() {
  return (
    <Routes>
      <Route path="/" element={<WelcomePage />} />
      <Route path="/login" element={<LoginPage />} />
      <Route path="/guest" element={<GuestPage />} />
      <Route path="*" element={<Navigate to="/" replace />} />
    </Routes>
  )
}

export default App
