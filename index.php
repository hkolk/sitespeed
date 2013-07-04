<!DOCTYPE html>
<html>
    <head>
        <script type="text/javascript">
            var sitespeed = {};
            sitespeed.data = {};
            sitespeed.data.sessionid = "harm-session";
            sitespeed.data.pageid = "<?=uniqid();?>";
            sitespeed.data.domStart = new Date().getTime();
            sitespeed.currentTime = function() {
                return new Date().getTime();
            }
            sitespeed.event = function(name) {
                sitespeed.data.events = sitespeed.data.events || {};
                sitespeed.data.events[name] = sitespeed.currentTime();
            }
        </script>
    </head>
    <body>
        <script src="http://ajax.googleapis.com/ajax/libs/jquery/1.10.1/jquery.min.js"></script>
        <script type="text/javascript">
            var ts=new Date().getTime();
            document.write("<sc"+"ript src=\"sitespeed.js?"+ts+"\" type=\"text/javascript\"></"+"script>"); 
        </script>
        <a href="?<?=time()?>">Clickie</a>
        <script>sitespeed.event("beforeBanner");</script>
        <script>sitespeed.event("afterBanner");</script>
    </body>
</html>
