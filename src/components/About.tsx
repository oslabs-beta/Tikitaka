import * as React from 'react';

interface Iprops{

}

export default class TestForm extends React.Component<Iprops, any>{
  public render(): JSX.Element{
    return(
      <div className="row">
          <div className="col-sm-6 col-md-4">
              <div className="thumbnail">
                  <img src="https://i.pinimg.com/originals/40/1f/0d/401f0d725cb58dc2eca493bdfa479694.jpg" alt="..."/>
                  <div className="caption">
                    <h3>Arman Gurkan</h3>
                    <p>Baby lover</p>
                    <p><a href="https://github.com/armangurkan" className="btn btn-primary" role="button">Github</a></p>
                    <p><a href="https://www.linkedin.com/in/armangurkan/" className="btn btn-primary" role="button">Linkedin</a></p>
                  </div>
              </div>
          </div>
          <div className="col-sm-6 col-md-4">
              <div className="thumbnail">
                  <img src="https://i.pinimg.com/236x/4d/c6/95/4dc6953e5504b6948c38ed2e5e92facc--manga-girl-manga-anime.jpg" alt="..."/>
                  <div className="caption">
                      <h3>Jie-Yun Catherine Cheng</h3>
                      <p>Cat lover</p>
                      <p><a href="https://github.com/chengjieyun59" className="btn btn-primary" role="button">Github</a></p>
                      <p><a href="https://www.linkedin.com/in/jie-yun-catherine-cheng/" className="btn btn-primary" role="button">Linkedin</a></p>
                  </div>
              </div>
          </div>
          <div className="col-sm-6 col-md-4">
              <div className="thumbnail">
                  <img src="https://data.whicdn.com/images/308901666/original.jpg" alt="..."/>
                  <div className="caption">
                      <h3>Pati Honores</h3>
                      <p>dog lover</p>
                      <p><a href="https://github.com/phonores" className="btn btn-primary" role="button">Github</a></p>
                      <p><a href="https://www.linkedin.com/in/patricia-h-802854149/" className="btn btn-primary" role="button">Linkedin</a></p>
                  </div>
              </div>
          </div>
          <div className="col-sm-6 col-md-4">
              <div className="thumbnail">
                  <img src="https://data.whicdn.com/images/314210490/original.jpg" alt="..."/>
                  <div className="caption">
                      <h3>Ryan SukWoo Kim</h3>
                      <p>Song lover</p>
                      <p><a href="https://github.com/tkdryan" className="btn btn-primary" role="button">Github</a></p>
                      <p><a href="https://www.linkedin.com/in/ryan-kim-053878141/" className="btn btn-primary" role="button">Linkedin</a></p>
                  </div>
              </div>
          </div>
          <div className="col-sm-6 col-md-4">
              <div className="thumbnail">
                  <img src="https://i.pinimg.com/originals/be/5d/7e/be5d7ea6e1193c54834d028f5874598a.jpg" alt="..."/>
                  <div className="caption">
                      <h3>Yunho Cho</h3>
                      <p>Kimchi lover</p>
                      <p><a href="https://github.com/ycho0502" className="btn btn-primary" role="button">Github</a></p>
                      <p><a href="https://www.linkedin.com/in/yunho-cho-437a311a0/" className="btn btn-primary" role="button">Linkedin</a></p>
                  </div>
              </div>
          </div>
      </div>
    )
  }
}