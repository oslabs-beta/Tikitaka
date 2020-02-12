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
            <p>Thug Life</p>
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