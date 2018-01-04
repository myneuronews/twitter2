var React = require('react');
var SearchForm = require('./parts/SearchForm.jsx');

function Hero(props){
  return(
      <div className="hero container-fluid">
        <div className="row">
          <div className="content col-sm-12">
            <h1>ΠΡΑΚΟΛΟΥΘΗΣΤΕ ΤΙΣ ΑΝΤΙΔΡΑΣΕΙΣ ΠΟΥ ΛΑΜΒΑΝΕΙ ΤΟ ΟΝΟΜΑ ΣΑΣ ΣΤΟ Twitter</h1>
            <h2>ΠΩΣ ΕΜΦΑΝΙΖΕΤΑΙ Η ΕΤΑΙΡΙΑ ΣΑΣ ΣΤΟ Twitter;</h2>
            <h2 className="text-logo"><img id="logo" src="/img/twitterment.png" />WN Real Time Twitter Analytics</h2>
            
            <SearchForm emit={ props.emit } initTimestamp={ props.initTimestamp } />
          </div>
        </div>
      </div>
    );
}

module.exports = Hero;
