import React, {useState} from "react";
import Select from "react-select";
import Card from "./card";


function DataScope( ) {
    var region=[
        {
            value:'0',
            label:'State'
        },
        {
            value: '1',
            label:'District'
        },
        {
            value: '2',
            label:'Sub-District'
        },
        {
            value:'3',
            label:'Pincodes'
        },
    ];

    const[value , filevalue ]=useState(region.value);
    const filehandler = e =>{
        filevalue(e.value);
    }
    return(
        <div>
            <div style={{width: '250px'}}>
            <Select  defaultValue={{ label: "State", value: 0 }} options= {region} onChange={filehandler}/></div>
            <div class="col-sm-4" id="dFiles">
                <a href="DownloadCsvFiles">
                    <button class="btn" id="downCode">DOWNLOAD</button>
                </a>
            </div>
            {(() => {
                switch(value) {
                    case ('1'):
                        return (
                            <Card title = "Uploading Non-Spatial Data"
                                description ={<div><ol><li> To visualize your data on our maps, you need to join it to our spatial data.</li>
                                <li>Select your Data Scope(State/District/Sub-District/Pincodes) and download the file which contains code tokens for each region in the scope.</li>
                                <li>Create a column in your CSV data file named “DIST_CODE” and copy the region codes from the code file to the corresponding region rows.</li>
                                <li>Save and upload the modified CSV data file."</li></ol></div>}/>);
                    case ('2'):
                        return (
                            <Card title = "Uploading Non-Spatial Data"
                                description ={<div><ol><li> To visualize your data on our maps, you need to join it to our spatial data.</li>
                                <li>Select your Data Scope(State/District/Sub-District/Pincodes) and download the file which contains code tokens for each region in the scope.</li>
                                <li>Create a column in your CSV data file named “SUB_DIST_Code” and copy the region codes from the code file to the corresponding region rows.</li>
                                <li>Save and upload the modified CSV data file."</li></ol></div>}/>);
                    case ('3'):
                        return (
                            <Card title = "Uploading Non-Spatial Data"
                                description ={<div><ol><li> To visualize your data on our maps, you need to join it to our spatial data.</li>
                                <li>Select your Data Scope(State/District/Sub-District/Pincodes) and download the file which contains code tokens for each region in the scope.</li>
                                <li>Create a column in your CSV data file named “PINCODE” and copy the region codes from the code file to the corresponding region rows.</li>
                                <li>Save and upload the modified CSV data file."</li></ol></div>}/>);
                       
                    default:
                        return (
                            <Card title = "Uploading Non-Spatial Data"
                                description ={<div><ol><li> To visualize your data on our maps, you need to join it to our spatial data.</li>
                                <li>Select your Data Scope(State/District/Sub-District/Pincodes) and download the file which contains code tokens for each region in the scope.</li>
                                <li>Create a column in your CSV data file named “STATE_CODE” and copy the region codes from the code file to the corresponding region rows.</li>
                                <li>Save and upload the modified CSV data file."</li></ol></div>}/>);
                }
            })()}           
        </div>
    )
}
export default DataScope;