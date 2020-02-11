import * as React from 'react';
import Form from 'react-bootstrap/Form'
import { Col, Row } from 'react-bootstrap';
import Button from 'react-bootstrap/Button'
// import * as cat from '../assets/IMG_9802.png';
// const cat = require('../assets/IMG_9802');

interface Iprops{

}

export default class TestForm extends React.Component<Iprops, any>{
  public render(): JSX.Element{
    return(
      <div className="row">
          <div className="col-sm-6 col-md-4">
              <div className="thumbnail">
                  <img src="src/assets/IMG_9802.png" alt="..."/>
                  <div className="caption">
                    <h3>Arman Gurkan</h3>
                    <p>Turkish dada</p>
                    <div className='profile-links'>
                      <a href="https://www.linkedin.com/in/jie-yun-catherine-cheng/" target='_blank'>
                        <i className='fab fa-linkedin'></i>
                      </a>
                      <a href="https://github.com/chengjieyun59" target='_blank'>
                        <i className='fab fa-github'></i>
                      </a>
                    </div>
                  </div>
              </div>
          </div>
          <div className="col-sm-6 col-md-4">
              <div className="thumbnail">
                  <img src="src/assets/IMG_9802.png" alt="..."/>
                  <div className="caption">
                      <h3>Jie-Yun Catherine Cheng</h3>
                      <p>Cat lover</p>
                      <p><a href="#" className="btn btn-primary" role="button">Button</a> <a href="#" className="btn btn-default" role="button">Button</a></p>
                  </div>
              </div>
          </div>
          <div className="col-sm-6 col-md-4">
              <div className="thumbnail">
                  <img src="src/assets/IMG_9802.png" alt="..."/>
                  <div className="caption">
                      <h3>Pati Honores</h3>
                      <p>dog lover</p>
                      <p><a href="#" className="btn btn-primary" role="button">Button</a> <a href="#" className="btn btn-default" role="button">Button</a></p>
                  </div>
              </div>
          </div>
          <div className="col-sm-6 col-md-4">
              <div className="thumbnail">
                  <img src="src/assets/IMG_9802.png" alt="..."/>
                  <div className="caption">
                      <h3>Ryan SukWoo Kim</h3>
                      <p>rapper</p>
                      <p><a href="#" className="btn btn-primary" role="button">Button</a> <a href="#" className="btn btn-default" role="button">Button</a></p>
                  </div>
              </div>
          </div>
          <div className="col-sm-6 col-md-4">
              <div className="thumbnail">
                  <img src="src/assets/IMG_9802.png" alt="..."/>
                  <div className="caption">
                      <h3>Yunho Cho</h3>
                      <p>gangster</p>
                      <p><a href="#" className="btn btn-primary" role="button">Button</a> <a href="#" className="btn btn-default" role="button">Button</a></p>
                  </div>
              </div>
          </div>
      </div>
    )
  }
}