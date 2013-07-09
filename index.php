<!DOCTYPE html>
<html>
    <head>
        <script type="text/javascript">
        // Bootstrap of script
        var sitespeed = {
            data: {},
            currentTime: function() {
                return Date.now();
                return new Date().getTime();
            },
            event: function(name) {
                sitespeed.data.events = sitespeed.data.events || {};
                sitespeed.data.events[name] = sitespeed.currentTime();
             }
        }
        // end of bootstrap
        sitespeed.debug = true;
        sitespeed.postUri = "sensor.php";
        sitespeed.strapped = sitespeed.currentTime();
        sitespeed.data.sessionid = "harm-session";
        sitespeed.data.pageid = "<?=uniqid();?>";
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
        <script>
        var tag_string = '<script language="JavaScript" src="http://ad.nl.doubleclick.net/adj/mpnl.0/home;pos=homemb;tile=2;sz=440x250;ord="+ts+"?" type="text/javascript"><' + '/script>';
        document.write(tag_string);
        </script>
        <script>sitespeed.event("afterBanner");</script>
    </body>
</html>
