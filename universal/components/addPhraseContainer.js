import React, { Component } from "react";
import AddedPhrase from "./addedPhrase";
import AddPhraseForm from "./addPhraseForm";

class AddPhraseContainer extends Component {
    constructor(props){
        super(props);
        this.state = { newestPhrase: null, newestTranslation: null };
        this.getNewestPhrase = this.getNewestPhrase.bind(this);
    }

    getNewestPhrase(newestPhrase, newestTranslation){
        this.setState({ newestPhrase, newestTranslation })
        console.log(this.state)
    }
  
    render() {
      return (
        <div>
            {this.state.newestPhrase && this.state.newestTranslation ? (<AddedPhrase { ...this.state } />) : (<div></div>) }
            <AddPhraseForm getNewestPhrase = { this.getNewestPhrase } />
        </div>
      );
    }
  }
  
export default AddPhraseContainer;