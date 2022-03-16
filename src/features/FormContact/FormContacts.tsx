
export default function FormContacts(){
    return (
      <div className="FormaisonDiv">
      <form className="ui form ">
  <div className="field">
    <label className="Formaison" >First Name</label>
    <input type="text" name="first-name" placeholder="First Name" />
  </div>
  <div className="field">
    <label className="Formaison" >Last Name</label>
    <input type="text" name="last-name" placeholder="Last Name" />
  </div>
  <div className="two fields">
    <div className="field">
      <label className="Formaison">Date de spectacle </label>
      <select className="ui fluid dropdown">
        <option value="">Date</option>
    <option value="22">22 Octobre</option>
    <option value="23">23 Octobre</option>
    <option value="24">24 Octobre</option>
      </select>
    </div>
    <div className='field'>
    <label className="Formaison">Number of places</label>
        <div className="field">
          <select className="ui fluid search dropdown" name="NumberPlaces">
            <option value="">Number</option>
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
            <option value="4">4</option>
            <option value="5">5</option>
            <option value="6">6</option>
            <option value="7">7</option>
            <option value="8">8</option>
            <option value="9">9</option>
            <option value="10">10</option>
            <option value="11">11</option>
            <option value="12">12</option>
          </select>
        </div>
    </div>
  </div>
  <h4 className="ui dividing header Formaison">Billing Information</h4>
  <div className="field">
    <label className="Formaison">Card Type</label>
    <div className="ui selection dropdown">
      <input type="hidden" name="card[type]" />
      <div className="default text">Type</div>
      <i className="dropdown icon"></i>
      <div className="menu">
        <div className="item" data-value="visa">
          <i className="visa icon"></i>
          Visa
        </div>
        <div className="item" data-value="amex">
          <i className="amex icon"></i>
          American Express
        </div>
        <div className="item" data-value="discover">
          <i className="discover icon"></i>
          Discover
        </div>
      </div>
    </div>
  </div>
  <div className="fields">
    <div className="seven wide field">
      <label className="Formaison">Card Number</label>
      <input type="text" name="card[number]"  placeholder="Card #" />
    </div>
    <div className="three wide field">
      <label className="Formaison">CVC</label>
      <input type="text" name="card[cvc]"  placeholder="CVC" />
    </div>
    <div className="six wide field">
      <label className="Formaison">Expiration</label>
      <div className="two fields">
        <div className="field">
          <select className="ui fluid search dropdown" name="card[expire-month]">
            <option value="">Month</option>
            <option value="1">January</option>
            <option value="2">February</option>
            <option value="3">March</option>
            <option value="4">April</option>
            <option value="5">May</option>
            <option value="6">June</option>
            <option value="7">July</option>
            <option value="8">August</option>
            <option value="9">September</option>
            <option value="10">October</option>
            <option value="11">November</option>
            <option value="12">December</option>
          </select>
        </div>
        <div className="field">
          <input type="text" name="card[expire-year]"  placeholder="Year" />
        </div>
      </div>
    </div>
  </div>
  <button className="ui button" type="submit" >Submit</button>
</form>
</div>
    )
}