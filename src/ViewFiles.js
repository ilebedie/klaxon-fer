import React, { Component } from 'react';
import './App.css'
import { BACKEND_URL, GET_FOLDER_CONTENT } from './Config'

class ViewFiles extends Component {

  constructor(props) {
      super(props);
      this.state = {
        files: []
      }
  }

  fetchFolderContents(folderId) {
    //Get list of files
    fetch(`${BACKEND_URL}${GET_FOLDER_CONTENT}?id=${folderId}`)
     .then(response => {
        if (response.ok) {
          return response.json();
        }
        throw new Error('Network response was not ok.');
      })
     .then(data => {
       this.setState({files:data})
     });
  }

  componentDidMount() {
    this.fetchFolderContents("");
  }

  searchField() {
    //TODO: wire a filesearch
    return (
      <div className="form-inline col-md-4">
        <div className="form-group">
          <input className="form-control"
            placeholder="Search a file"
          />
        </div>
        <button type="button"
          className="btn btn-search">
          <span className="glyphicon glyphicon-search"
              aria-hidden="true"/>
              Search a file
        </button>
      </div>
    )
  }


  onFileListItemClick(item) {
    if (item.isDir === true) {
      this.fetchFolderContents(item.folderId);
    } else {
      window.location = item.url;
    }
  }

  displayFileList() {
    return (
      <div className="panel panel-default ">
        <div className="panel-heading">
          File list
        </div>
        <div className="panel-body">
          <div className="list-group">
            {
              this.state.files.map((item, k) => {
                console.log(item.isDir);
                let icon = item.isDir === true ? "glyphicon glyphicon-folder-open col-md-4" : "glyphicon glyphicon-file col-md-4";
                return(
                  <button
                    type="button"
                    key={k}
                    className="list-group-item "
                    onClick={() => {this.onFileListItemClick(item)}}
                  >
                    <span className={icon} aria-hidden="true">  </span>
                    {item.name}
                  </button>
                 )
              })
            }
          </div>
        </div>
      </div>
    )
  }

  render() {
    return (
      <div className="App">
        <div className="App-title">
          Klaxon
        </div>
        {this.searchField()}
        {this.displayFileList()}
      </div>
    )
  }
}

export default ViewFiles;
