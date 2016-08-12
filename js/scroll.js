/**
 * Created by Administrator on 2016/7/29.
 */
var LoopImages=function(imgArr,container)
{
    this.imagesArr=imgArr;
    this.container=container;
};

LoopImages.prototype={
    createImg:function()
    {
        var that=this;
        for(var i=0;i<that.imagesArr.length;i++)
        {
            that.container.innerHTML+="<img src="+that.imagesArr[i]+">";
        }

        for(var i=0;i<that.imagesArr.length;i++)
        {
            that.container.innerHTML+="<img src="+that.imagesArr[i]+">";
        }
        that.container.style.width=200*2*(that.imagesArr.length)+"px";

        var timer=null;
        function time(){
            timer=setInterval(function(){
                if(that.container.offsetLeft>-that.container.offsetWidth/2)
                {
                    that.container.style.left=that.container.offsetLeft-3+"px";
                }else
                {
                    that.container.style.left=0;
                }

            },30);
        }

        time();
        that.container.onmouseover=function(){
            clearInterval(timer);
        };

        that.container.onmouseout=function(){
            time();
        };


        return "createImg";
    },
    changeImg:function()
    {
        return "change image";
    }
};

var SlideLoopImage=function(imgArr,container)
{
    LoopImages.call(this,imgArr,container);
};
SlideLoopImage.prototype=new LoopImages();
SlideLoopImage.prototype.changeImg=function()
{
    return "slide image";
};
