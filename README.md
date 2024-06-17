This script allows the user to pass the #id of an accordion element in the URL, and the script will automatically open the text of the accordion when the page loads.

The id of the accordion item you want to open can be found by using a browser debugging tool, typically accessed by F12, and using the inspector to find the button within the accordion.
The button will look something like this: <button id="button-block-yui_3_17_2_1_1717881226444_11132-0"....
The button ids are sequential, starting with 0, so the first item in the accordion is <button block id>-0, the second is <button block id>-1, etc.
Copy the id of the item you want to click, and use this to generate the link you will put in your page.

E.g. https://yoursite.com/faq#button-block-yui_3_17_2_1_1717881226444_11132-0

There are four versions of the script:
1) Pure JavaScript to find the element and trigger the click event.
2) Minified pure Javascript if you don't need to debug, or to use after you have your page working properly.
3) jQuery based to achieve the same goal.
4) Minified jQuery if you don't need to debug, or to use after you have your page working properly.

If you use the jQuery version, it is up to you where you choose to include the jQuery script library reference: <head> <footer> or page code injection.

The script is best inserted in: Page -> Settings -> Advanced -> Page Header Code Injection as it is only needed on pages where you use an accordion.
