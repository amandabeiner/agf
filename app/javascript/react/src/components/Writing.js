import React from 'react';
import Header from './Header'

const Writing = props => {
  return (
    <div className="writing-container">
      <Header
        headerName="Writing"
      />
      <div className="articles-container row">
        <div className="writing-project small-12 medium-4 columns end">
          <img src="https://img.washingtonpost.com/wp-apps/imrs.php?src=https://img.washingtonpost.com/rf/image_960w/2010-2019/WashingtonPost/2017/08/19/National-Politics/Images/Boston_SG35.JPG&w=1484" className="writing-image"/>
          <a className="source-link" href="https://www.washingtonpost.com/news/made-by-history/wp/2017/08/25/why-do-police-riot-squads-target-protesters-instead-of-white-supremacists/?utm_term=.bd37aae7f4ec">Why do police riot squads target protesters instead of white supremacists?</a>
          <p><i>Washington Post</i> August 25, 2017</p>
        </div>
        <div className="writing-project small-12 medium-4 columns end">
          <img src="https://img.washingtonpost.com/wp-apps/imrs.php?src=https://img.washingtonpost.com/rf/image_960w/2010-2019/WashingtonPost/2017/08/19/National-Politics/Images/Boston_SG35.JPG&w=1484" className="writing-image"/>
          <a className="source-link" href="https://www.wcwonline.org/Women-s-Review-Of-Books-Sept/Oct-2015/protected-and-policed">"Protected and Policed"</a>
          <p><i>Womens Review of Books</i>, 32, No. 5 (September/October 2015)</p>
        </div>
        <div className="writing-project small-12 medium-4 columns end">
          <img src="https://img.washingtonpost.com/wp-apps/imrs.php?src=https://img.washingtonpost.com/rf/image_960w/2010-2019/WashingtonPost/2017/08/19/National-Politics/Images/Boston_SG35.JPG&w=1484" className="writing-image"/>
          <a className="source-link" href="https://www.wcwonline.org/Womens-Review-of-Books-%E2%80%93-Sept/Oct-2013/sex-work-and-the-law">"Sex Work and the Law"</a>
          <p><i>Womens Review of Books</i>, 30, No. 5 (September/October 2013)</p>
        </div>
        <div className="writing-project small-12 medium-4 columns end">
          <img src="https://img.washingtonpost.com/wp-apps/imrs.php?src=https://img.washingtonpost.com/rf/image_960w/2010-2019/WashingtonPost/2017/08/19/National-Politics/Images/Boston_SG35.JPG&w=1484g" className="writing-image"/>
          <a className="source-link" href="https://www.bostonglobe.com/arts/books/2013/06/15/the-library-test-kitchen-harvard-university/G4LsBrZUuYYJTOXEsT2QHJ/story.html">"The Library Test Kitchen at Harvard University"</a>
          <p><i>Boston Globe</i>, June 15, 2013</p>
        </div>
        <div className="writing-project small-12 medium-4 columns end">
          <img src="https://img.washingtonpost.com/wp-apps/imrs.php?src=https://img.washingtonpost.com/rf/image_960w/2010-2019/WashingtonPost/2017/08/19/National-Politics/Images/Boston_SG35.JPG&w=1484" className="writing-image"/>
          <a className="source-link" href="https://www.bitchmedia.org/article/forty-years-in-the-hustle-sex-work-margo-st-james-interview-activism-coyote">"Forty Years in the Hustle: A Q&A with Margo St. James"</a>
          <p><i>Bitch Magazine</i>, Spring 2013. Reposted on alternet.org</p>
        </div>
      </div>
    </div>
  )
}

export default Writing;
