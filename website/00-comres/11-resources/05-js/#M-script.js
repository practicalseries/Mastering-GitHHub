/* MASTERING GITHUB (c) 2025

*******************************************************************************
Title:            MASTERING GITHUB                                    SCRIPT.JS
*******************************************************************************

MASTERING GITHUB: Is authored by Michael Gledhill 
                  and published by the Practical Series of Publications
                  Published in the United Kingdom

                  Email: mg@masteringgithub.com
                  Web:   https://masteringgithub.com

-------------------------------------------------------------------------------
DETAILS

jQuery is using version 3.1.0 from the GoogleAPIs library.

The Waypoint function is a Java plugin supplied by imakewebthings and downloaded
from their website: http://imakewebthings.com/waypoints/

The waypoint plugin is available under the github MIT licenced reproduce below:

-------------------------------------------------------------------------------
WAYPOINT LICENCE

The MIT License (MIT)
Copyright © 2011-2012 Caleb Troughton

Permission is hereby granted, free of charge, to any person obtaining a copy of
this software and associated documentation files (the "Software"), to deal in
the Software without restriction, including without limitation the rights to
use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies
of the Software, and to permit persons to whom the Software is furnished to do
so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.

-------------------------------------------------------------------------------


*******************************************************************************
MODIFICATION HISTORY:

This is a complete summary of all software modifications.

Date          Issue        Author         Reason for Modification
-------------------------------------------------------------------------------
15 May 2025   001.000      M. Gledhill    Re-issued at version 001.000

10 Feb 2021   000.101      M. Gledhill    Development release for site build
                                          Revision control active

08 Feb 2021   000.000      M. Gledhill    Established for PAL

20 May 2018   D00.01       M. Gledhill    Fixed nav applies to both class or ID

                                          FindSection() function added for
                                          dynamic navigation (via side TOC)

15 May 2018   D00          M. Gledhill    Development - based on PS1002 R01
---------------------------------------------------------------------------- */


/* ****************************************************************************
   WAIT FOR PAGE TO LOAD
   ****************************************************************************
   No JQuery actions take place until the webpage has loaded, all JQuery code
   is contained within the .ready(function()).
   ************************************************************************* */


$(document).ready(function() {                      /* START OF PAGE READY FUNCTION */


/* ****************************************************************************
   REVISION
   **************************************************************************** */

    $('#rev-script').append (
        "<p>001.000</p>" /* LOCAL JS REVISION NUMBER */
    );
    
    
/* ****************************************************************************
   FIXED NAVIGATION BAR (WAYPOINT FUNCTION)
   ****************************************************************************
   This function causes the navigation bar to be fixed at the top edge of the
   screen once the user has scrolled down to waypoint js--fixed-nav (this is
   generally the first section of the website after the TOC).
   
   The waypoint js--fixed-nav can be either a class or ID in the HTML,
   ID is preferred.

   The waypoint function adds the class .fixed-nav to the <nav> element.

   Similarly, the .fixed-nav class is removed when scrolling up to a point
   above the first waypoint js--fixed-nav.

   The waypoint function returns the direction of travel when passing the
   waypoint specified. In this case an offset of 60px is added (the class is
   added when the waypoint is within 60px of the top of the screen).
   ************************************************************************* */
    

   /* FIXED NAV TRIGGERS AT THE CLASS .js--fixed-nav */
    $('.js--fixed-nav').waypoint(function (direction) { /* START of Waypoint function
                                                           triggers as .js--fixed-nav class */
        if (direction == "down") {                      /* check direction */
            $('nav').addClass('fixed-nav');             /* if moving downward activate fixed-nav class */
            $('.side-toc').addClass('nav-on');
       } else {
            $('nav').removeClass('fixed-nav');          /* if moving upward de-activate fixed-nav class */
            $('.side-toc').removeClass('nav-on');
        }
    }, {
    offset: '60px'                                      /* check for waypoint 60px before top of screen */
    });                                                 /* END of Waypoint function */

    /* FIXED NAV TRIGGERS AT THE ID #js--fixed-nav */
    $('#js--fixed-nav').waypoint(function (direction) { /* START of Waypoint function
                                                           triggers as #js--fixed-nav ID */
        if (direction == "down") {                      /* check direction */
            $('nav').addClass('fixed-nav');             /* if moving downward activate fixed-nav class */
        } else {
            $('nav').removeClass('fixed-nav');          /* if moving upward de-activate fixed-nav class */
        }
    }, {
    offset: '60px'                                      /* check for waypoint 60px before top of screen */
    });                                                 /* END of Waypoint function */

});                                                 /* END OF PAGE READY FUNCTION */
