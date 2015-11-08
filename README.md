New beginings in business IoT and Cloud computing
=================
[Github](https://github.com/toklok/aws-iot) - [Twitter](https://twitter.com/jcurt) - [Google Plus](https://plus.google.com/u/0/+JosephCurtisprofile-on-google-plus/posts)

Have you ever wanted to change the world or inspire a student?  You ever think to yourself you want to invest precious time in a cause that you believe is greater than yourself?  This is how I feel every time I start playing around with a micro controller.  I am a enterprising individual that always wanted to create a robot since I was 5.

Join me on this adventure as I set up and deploy a hospital call light system using an IoT device, utilizing Amazon Web Services.  I will do live coding and hacking in general and share the list of the architect making this possible, I hope this guide will serve other people as I go through this journey. 

I will talk about some technologies I will use first, because this will be the biggest hurdle in my opinion and it's my favorite step.  I have to use Lambda which will be event driven, and I'm totally going to use [JAWS](https://github.com/jaws-framework/JAWS "JAWS: The Serverless Application Framework").  I will use Node.js and I want to utilize Docker and learn more about testing with Docker.  The Amazon services are going to be updated from time to time as I work through the project and stay tuned for me to lock everything down.

The hardware?  I want to have a [piezo buzzer](http://www.hometrainingtools.com/buzzer-piezo-electric-dc?fee=2&fep=1229&gclid=CjwKEAiA3_axBRD5qKDc__XdqQ0SJAC6lecApIA6a7Hc-FCWLZuX1eR0WsLM6uO9ZqtezgJE-NOgYxoCKpLw_wcB), [usb powered speakers](http://www.adafruit.com/products/1363?gclid=CjwKEAiA3_axBRD5qKDc__XdqQ0SJAC6lecAB3moN0ixWX0-HFwIDUlaCD0YBJSjjd9ZGoAr6mcLPhoCeljw_wcB), assorted light LED light bulbs.  I will also used a scale down version on a plywood piece of wood, technology is awesome!   

Here is my idea
===============

Hospitals constantly endeavor to improve patient outcomes, optimize workflow and expand their diagnostic capabilities.  A critical component to managing these components in such a large industry is one common to all businesses – cost management.  Critical components of existing, and very often expensive, systems are ready for replacement with the application of new and more cost-effective tech.

One integral part of hospital function is now facing rapid obsolescence - call light systems.  Using cloud computing, we can rapidly modernize hospitals on a global scale.  This futuristic call light system will use a smart phone and specifically target Mozilla based browsers.  We will be in regulation with UL 2560 that covers the placement, notification and resetting of staff-initiated and patient-initiated signals intended to alert others to a need.

This requires:

Audible and visual annunciation of calls at nurse stations
Call annunciation at the room’s dome light
Visual “call placed” indicator on the patient station
Dome light zone visual annunciation
Call reset /cancellation

The master station will provide audible annunciation, the visual annunciation will be with a smart phone and another one strategically placed to achieve best view.

The patient station will be located at an inpatient bed and will initiate communication with the caregiver.  The patient will initiate it with the sound of their voice using Amazon Alexa and a physical device.

A great deal of effort should be spent looking at how to use nurse call tech to decrease time to care for a patient.  As technology moves forward we will see dramatic increases in patient satisfaction and quality of care.

![Art kind of sucks, but w/e](https://s3-us-west-2.amazonaws.com/s.cdpn.io/311237/IMG_20151107_113616.jpg)



