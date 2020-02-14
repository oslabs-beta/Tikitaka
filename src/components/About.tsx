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
          </div>
          <div className="caption">
            <h3>Arman Gurkan</h3>
            <p>Baby lover</p>
            <div className="flex-container">
              <a href='https://github.com/armangurkan'><img className="githubIcon" src='https://github.githubassets.com/images/modules/logos_page/GitHub-Mark.png'/></a>
              <a href='https://www.linkedin.com/in/armangurkan/'><img className="linkedinIcon" src='https://cdn3.iconfinder.com/data/icons/social-media-black-white-1/1024/linkedin-512.png'/></a>
            </div>
          </div>
        </div>

        <div className="col-sm-6 col-md-4">
          <div className="thumbnail">
            <img src="https://i.pinimg.com/236x/4d/c6/95/4dc6953e5504b6948c38ed2e5e92facc--manga-girl-manga-anime.jpg" alt="..."/>
          </div>
          <div className="caption">
            <h3>Jie-Yun Catherine Cheng</h3>
            <p>Cat lover</p>
            <div className="flex-container">
              <a href='https://github.com/chengjieyun59'><img className="githubIcon" src='https://github.githubassets.com/images/modules/logos_page/GitHub-Mark.png'/></a>
              <a href='https://www.linkedin.com/in/jie-yun-catherine-cheng/'><img className="linkedinIcon" src='https://cdn3.iconfinder.com/data/icons/social-media-black-white-1/1024/linkedin-512.png'/></a>
            </div>
          </div>
        </div>

        <div className="col-sm-6 col-md-4">
          <div className="thumbnail">
            <img src="https://data.whicdn.com/images/308901666/original.jpg" alt="..."/>
          </div>
          <div className="caption">
            <h3>Pati Honores</h3>
            <p>Dog lover</p>
            <div className="flex-container">
              <a href='https://github.com/phonores'><img className="githubIcon" src='https://github.githubassets.com/images/modules/logos_page/GitHub-Mark.png'/></a>
              <a href='https://www.linkedin.com/in/patricia-h-802854149/'><img className="linkedinIcon" src='https://cdn3.iconfinder.com/data/icons/social-media-black-white-1/1024/linkedin-512.png'/></a>
            </div>
          </div>
        </div>

        <div className="col-sm-6 col-md-4">
          <div className="thumbnail">
            <img src="https://data.whicdn.com/images/314210490/original.jpg" alt="..."/>
          </div>
          <div className="caption">
            <h3>Ryan SukWoo Kim</h3>
            <p>Song lover</p>
            <div className="flex-container">
              <a href='https://github.com/tkdryan'><img className="githubIcon" src='https://github.githubassets.com/images/modules/logos_page/GitHub-Mark.png'/></a>
              <a href='https://www.linkedin.com/in/ryan-kim-053878141/'><img className="linkedinIcon" src='https://cdn3.iconfinder.com/data/icons/social-media-black-white-1/1024/linkedin-512.png'/></a>
            </div>
          </div>
        </div>

        <div className="col-sm-6 col-md-4">
          <div className="thumbnail">
            <img src="data:image/jpeg;base64,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" alt="..."/>
          </div>
          <div className="caption">
            <h3>Yunho Cho</h3>
            <p>Code Life</p>
            <div className="flex-container">
              <a href='https://github.com/ycho0502'><img className="githubIcon" src='https://github.githubassets.com/images/modules/logos_page/GitHub-Mark.png'/></a>
              <a href='https://www.linkedin.com/in/yunho-cho-437a311a0/'><img className="linkedinIcon" src='https://cdn3.iconfinder.com/data/icons/social-media-black-white-1/1024/linkedin-512.png'/></a>
            </div>
          </div>
        </div>
      </div>
    )
  }
}