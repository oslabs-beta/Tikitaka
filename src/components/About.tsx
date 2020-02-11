import * as React from 'react';

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
                    <p>Baby lover</p>
                    <p><a href="https://github.com/armangurkan" className="btn btn-primary" role="button">Github</a></p>
                    <p><a href="#" className="btn btn-primary" role="button">Linkedin</a></p>
                  </div>
              </div>
          </div>
          <div className="col-sm-6 col-md-4">
              <div className="thumbnail">
                  <img src="src/assets/IMG_9802.png" alt="..."/>
                  <div className="caption">
                      <h3>Jie-Yun Catherine Cheng</h3>
                      <p>Cat lover</p>
                      <p><a href="https://github.com/chengjieyun59" className="btn btn-primary" role="button">Github</a></p>
                      <p><a href="#" className="btn btn-primary" role="button">Linkedin</a></p>
                  </div>
              </div>
          </div>
          <div className="col-sm-6 col-md-4">
              <div className="thumbnail">
                  <img src="src/assets/IMG_9802.png" alt="..."/>
                  <div className="caption">
                      <h3>Pati Honores</h3>
                      <p>dog lover</p>
                      <p><a href="https://github.com/phonores" className="btn btn-primary" role="button">Github</a></p>
                      <p><a href="#" className="btn btn-primary" role="button">Linkedin</a></p>
                  </div>
              </div>
          </div>
          <div className="col-sm-6 col-md-4">
              <div className="thumbnail">
                  <img src="src/assets/IMG_9802.png" alt="..."/>
                  <div className="caption">
                      <h3>Ryan SukWoo Kim</h3>
                      <p>Song lover</p>
                      <p><a href="https://github.com/tkdryan" className="btn btn-primary" role="button">Github</a></p>
                      <p><a href="#" className="btn btn-primary" role="button">Linkedin</a></p>
                  </div>
              </div>
          </div>
          <div className="col-sm-6 col-md-4">
              <div className="thumbnail">
                  <img src="src/assets/IMG_9802.png" alt="..."/>
                  <div className="caption">
                      <h3>Yunho Cho</h3>
                      <p>Kimchi lover</p>
                      <p><a href="https://github.com/ycho0502" className="btn btn-primary" role="button">Github</a></p>
                      <p><a href="#" className="btn btn-primary" role="button">Linkedin</a></p>
                  </div>
              </div>
          </div>
      </div>
    )
  }
}