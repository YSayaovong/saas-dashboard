export default function Settings() {
  return (
    <div className="page">
      <header className="page-header">
        <div>
          <h1>Settings</h1>
          <p className="page-subtitle">Manage workspace preferences.</p>
        </div>
      </header>

      <div className="panel settings-panel">
        <div className="form-group">
          <label>Workspace Name</label>
          <input className="input" defaultValue="SayaDash" />
        </div>

        <div className="form-group">
          <label>Billing Email</label>
          <input className="input" type="email" defaultValue="billing@sayadash.io" />
        </div>

        <button className="primary-btn">Save Changes</button>
      </div>
    </div>
  );
}
