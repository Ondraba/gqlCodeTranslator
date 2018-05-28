import React, { Component } from "react";
import Router from "next/router";
import { Formik } from "formik";
import Error from "./error";
import { graphql } from "react-apollo";
import gql from "graphql-tag";

class AddPhraseForm extends Component {
  constructor(props) {
    super(props);
    this.submit = this.submit.bind(this);
  }

  submit({ phrase }) {
    event.preventDefault();
    this.props
      .mutate({
        variables: {
          phrase
        }
      })
      .then(({data}) => {
        data = null ? console.log("Phrase promise resolved data is null") : this.props.getNewestPhrase(data.addPhrase.phrase, data.addPhrase.translation)
      })
  }

  render() {
    return (
      <Formik
        initialValues={{
          phrase: ""
        }}
        validate={values => {
          let errors = {};

          const { phrase } = values;

          if (!phrase) {
            errors.phrase = "Phrase is required!";
          }
          return errors;
        }}
        onSubmit={(values, { setSubmitting, setErrors, resetForm }) => {
          return new Promise((resolve, reject) => {
            try {
              resolve(this.submit(values)).then(() => {
                resetForm();
              });
            } catch (err) {
              reject(err);
            }
          });
        }}
        render={({
          values,
          errors,
          touched,
          handleChange,
          handleBlur,
          handleSubmit,
          isSubmitting,
          handleReset
        }) => (
          <form onSubmit={handleSubmit}>
          <div>
              <input
                type="number"
                name="phrase"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.phrase}
              />
              {touched.phrase && errors.phrase && <Error value={errors.phrase} />}
            </div>
            <button type="submit" disabled={isSubmitting} style={styles.button}>
              Přeložit
            </button>
          </form>
        )}
      />
    );
  }
}

const styles = {
  button: {
    marginTop: "40px"
  }
}

const mutation = gql`
  mutation AddPhrase(
    $phrase: String!
  ) {
    addPhrase(
      phrase: $phrase
    ) {
      _id
      phrase
      translation
    }
  }
`;

export default graphql(mutation)(AddPhraseForm);
