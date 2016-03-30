# i18n issue?

This project is based on aurelia-skeleton-es2016 and is now set up to use aurelia-i18n 0.5.0.

I've only modified the main.js and welcome.html and added some comments in the code (and added some json files under locales).

In welcome.html I've added two translated spans at the bottom. One using the default namespace and one using the ```main``` namespace.

When I use ```en``` as language nothing gets translated. My guess it's because the translation/en resource is already added for en, sv and some other languages (containing dates stuff) and thus skipped.

When I change to other languages like sv-SE or en-GB things start working. Also if I add a "main" namespace and a main.js it works even for "en", but then I need to ```main:``` prefix it even though I've set the defaultNS to main.

I'm not sure this is necessarily a big issue and I don't have any big issues with renaming my translation files and prefixing the html translations. In one of my projects I had planned to do that already.

But it's still different from how it behaved in 0.4.13 and earlier where I could use "en" and still not need to use custom namespaces.

If you downgrade the aurelia-i18n in the packages json to 0.4.13 and switch the commented out plugin setups in main.js you can see that it works fine with "en" without namespaces. 
