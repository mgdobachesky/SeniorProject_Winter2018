// Import required modules
import React from 'react';

/*
 * Home view
 */
var HomeJSX = function () {
    return (
        <div className="container-fluid">
            {/*Row 1, Logo and Info section*/}
            <div className="row firstRow">
                <div className="col-md-3"></div>

                <div className="col-md-3">
                    <img src="/logo.png" className="img-fluid height:auto max-width:80%"/>
                </div>

                <div className="col-md-3 info">
                    <h2>Welcome to Cadre!</h2>
                    <p>Cadre is a unique way to create websites that have your own flair! Whether you want a simple
                        website to advertise your business,
                        or if you want to manage your own data and users, Cadre can help you achieve your goals in only
                        a few easy steps.</p>
                </div>

                <div className="col-md-3"></div>
            </div>


            {/*Row 2, Features 1 & 2*/}
            <div className="row">

                <div className="col-md-5 featureCard">

                    <h4>Organize your pages</h4>
                    <div className="row">

                        <div className="col-xl-5">
                            <img src="/pages.png" className="samplePic"/>
                        </div>
                        <div className="col-xl-7">
                            <p>Your web pages can be adorned with anything from images to forms to social media feeds.
                                You can also adjust
                                privacy settings on each page, so whether you'd like a page to be public or
                                private--it's all up to you!</p>
                        </div>
                    </div>

                </div>


                <div className="col-md-5 featureCard">
                    <h4>Themes</h4>
                    <div className="row">
                        <div className="col-xl-5">
                            <img src="/bootswatch.png" className="samplePic"/>
                        </div>
                        <div className="col-xl-7">
                            <p>Select from over 20 beautiful themes to decorate your websites. All of our themes come
                                from direct from the
                                open source project Bootswatch. If you'd like to learn more about all of the themes,
                                click <a href={"https://bootswatch.com/"} target={"_blank"}>here</a></p>
                        </div>

                    </div>


                </div>

            </div>


            {/*Row 3, Features 3 & 4*/}
            <div className="row">

                <div className="col-md-5 featureCard">

                    <h4>Manage your own users and data</h4>
                    <div className="row">

                        <div className="col-xl-5">
                            <img src="/users.png" className="samplePic"/>
                        </div>
                        <div className="col-xl-7">
                            <p>To go hand in hand with our optional privacy settings on each page, you may define both
                                administrator accounts
                                and accounts for all the users you may need on your site. Your admins could have the
                                option to edit pages or have
                                access to your predefined administrator-only pages</p>
                        </div>
                    </div>

                </div>


                <div className="col-md-5 featureCard">
                    <h4>Connect to social media</h4>
                    <div className="row">
                        <div className="col-xl-5">
                            <img src="/socialMedia.jpg" className="samplePic"/>
                        </div>
                        <div className="col-xl-7">
                            <p>Is the social media scene more your style? You can add your streams from Facebook,
                                Instagram, and Twitter right onto your webpages.</p>
                        </div>

                    </div>


                </div>

            </div>


        </div>
    );
};

// Export the Home view
export default HomeJSX;
