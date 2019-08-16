import React from "react";
import { connect } from "react-redux";
import SmurfCard from "./SmurfCard";
import Loader from "react-loader-spinner";
import {getSmurfData} from "../actions";


const SmurfList = props => {
    console.log("props in smurflist ", props)
    return(
        <>
            <button onClick={props.getSmurfData}>SHOW ME THE SMURFS!</button>
            
            <div className="smurf-list">
              {props.smurfs && 
                props.smurfs.map(smurf => 
                  <SmurfCard 
                    key={smurf.id}
                    name={smurf.name}
                    age={smurf.age}
                    height={smurf.height}
                  />
              )}
            </div>

        </>
    )
}

const mapStateToProps = state => {
    return{
        isLoading: state.isLoading,
        smurfs: state.smurfs
    }
}

export default connect(
    mapStateToProps, 
    {getSmurfData}
)(SmurfList)

