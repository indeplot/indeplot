import React, { Component } from 'react';
import { Controlled as CodeMirror } from 'react-codemirror2';
import 'codemirror/lib/codemirror.css';

import 'codemirror/theme/material.css';
import 'codemirror/theme/dracula.css';
import 'codemirror/theme/eclipse.css';
import 'codemirror/theme/elegant.css';
import 'codemirror/theme/twilight.css';

import 'codemirror/mode/htmlmixed/htmlmixed';
import 'codemirror/mode/python/python';
import 'codemirror/mode/javascript/javascript';
import 'codemirror/mode/css/css';

import 'codemirror/addon/scroll/annotatescrollbar'

class CodeEditor extends Component {
    constructor() {
        super();
        this.state = {
            lang: '',
            code: '',
            theme: 'material',
            wrap: false
        }
    }

    render() {
        const { lang, code, theme, wrap } = this.state;
        const codeMirrorOptions = {
            theme: theme,
            lineNumbers: true,
            lineWrapping: wrap,
        };

        return (
          <div className="code">
            <h1>{"</> Editor"}</h1>
            <div>
              <form>
                <select
                  className="custom-select mr-sm-2 col-sm-2"
                  id="language"
                  style={{marginTop: '2px'}}
                  onChange={(e) => this.setState({lang: e.target.value})}
                  value={this.state.lang}
                >
                  <option value="">Language</option>
                  <option value="htmlmixed">HTML</option>
                  <option value="python">Python</option>
                  <option value="javascript">Javascript</option>
                  <option value="css">CSS</option>
                </select>
                <select
                  className="custom-select mr-sm-2 col-sm-2"
                  id="theme"
                  style={{marginTop: '2px'}}
                  onChange={(e) => this.setState({theme: e.target.value})}
                  value={this.state.theme}
                >
                  <option value="material">Theme</option>
                  <option value="dracula">Dracula</option>
                  <option value="elegant">Elegant</option>
                  <option value="eclipse">Eclipse</option>
                  <option value="twilight">Twilight</option>
                </select>
                <input
                  style={{margin: '2px'}}
                  type="checkbox"
                  onChange={() => this.setState({wrap: !this.state.wrap})}
                  id="wrap"
                />
                <label style={{margin: '2px'}} htmlFor="wrap">
                  {' '}
                  Text wrap
                </label>
              </form>
            </div>
            <div>
              <CodeMirror
                value={code}
                options={{
                  mode: lang,
                  ...codeMirrorOptions,
                }}
                onBeforeChange={(editor, data, code) => {
                  this.setState({code});
                }}
              />
            </div>
          </div>
        );
    }
}

export default CodeEditor;