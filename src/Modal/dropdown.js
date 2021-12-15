import React, {useState} from "react";
import Select from "react-select";
import Card from "./card";
import DataScope from "./data";
import '../App.css';

function Dropdown( ) {
    var filetype=[
        {
            value:'0',
            label:'Comma Seperated Values(*.csv)'
        },
        {
            value: '1',
            label:'GeoJSON(*.geojson)'
        },
        {
            value: '2',
            label:'Shape(*.shp)'
        },
        {
            value:'3',
            label:'Comma Seperated Values without Lat & Long'
        },
        {
            value:'4',
            label:'Comma Seperated Values without Lat & Long join database on name'
        },
    ];

    const[value , filevalue ]=useState(filetype.value);
    const filehandler = e =>{
        filevalue(e.value);
    }
    return(

        <div>
            <Select  options= {filetype} defaultValue={{ label: "Comma Seperated Values(*.csv)", value: 0 }} onChange={filehandler}/><br/>
             {(() => {
                switch(value) {
                    case ('1'):
                        return <Card 
                        title = "Uploading GeoJSON Data"
                        description = "The uploaded file should be of the JSON or GeoJSON file type."/>;
                    case ('2'):
                        return <Card 
                        title = "Uploading Shape File"
                        description = {<div>The uploaded file should be a <b>ZIP file</b> containing the associated extension files. <p>Projection Required: <b>WGS 84 : EPSG 4326</b></p></div>}/>;
                    case ('3'):
                        return (
                            <div>
                            <h4>DATA SCOPE</h4>
                            <DataScope/></div>);
                       
                    case ('4'):
                        return (<div>
                        <h4>DATA SCOPE</h4>
                        <DataScope/></div>);
                        
                    default:
                        return <Card 
                        title = "Uploading Spatial Data"
                        description = {<div>The uploaded file should contain columns storing the longitude & latitude values and they should be named "<b>x</b>" and "<b>y</b>" or "<b>long</b>" and "<b>lat</b>" or "<b>longitude</b>" and "<b>latitude</b>" respectively.</div>}/>;
                }
            })()}

            
            
        </div>
    )
}
export default Dropdown;