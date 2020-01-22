/ *！
 *更新和文档位于：https：//github.com/BNDong
 * https://www.cnblogs.com/bndong/
 * @作者：BNDong，dbnuo @ foxmail.com
 ** /
如果（initCheck（））{
    var sidebarHtml =
        '<div class =“ container”>'+
        '<div class =“ menu-wrap optiscroll” id =“ menuWrap” style =“ display：none”>'+
        '<nav class =“ menu”>'+
        '<！-个人简介->'+
        '<div class =“ introduce-box”>'+
        '<div class =“ introduce-head”>'+
        '<div class =“ introduce-via” id =“ menuBlogAvatar”> </ div>'+
        '</ div>'+
        '<div id =“ introduce”> </ div>'+
        '</ div>'+
        '<！-导航->'+
        '<div class =“ nav-title”> </ div>'+
        '<div class =“ icon-list”>'+
        '<ul id =“ m-nav-list”>'+
        '</ ul>'+
        '</ div>'+
        '<！-日历->'+
        '<span id =“ calendar-box”> </ span>'+
        '<！-找找看->'+
        '<div class =“ m-list-title”> <span>找找看</ span> </ div>'+
        '<div class =“ m-icon-list” id =“ sb-sidebarSearchBox”> </ div>'+
        '<！-积分与排名->'+
        '<div class =“ m-list-title”> <span>积分排名<span class =“ iconfont icon-select m-list-title-select”> </ span> </ span> </ div>'+
        '<div class =“ m-icon-list” id =“ sb-sidebarScorerank”> </ div>'+
        '<！-最新随笔->'+
        '<div class =“ m-list-title”> <span>最新随笔<span class =“ iconfont图标-选择m-list-title-select”> </ span> </ span> </ div>'+
        '<div class =“ m-icon-list” id =“ sb-sidebarRecentposts”> </ div>'+
        '<！-我的标签->'+
        '<div class =“ m-list-title”> <span>我的标签<span class =“ iconfont icon-select m-list-title-select”> </ span> </ span> </ div>” +
        '<div class =“ m-icon-list” id =“ sb-toptags”> </ div>'+
        '<！-随笔分类->'+
        '<div class =“ m-list-title”> <span>随笔分类<span class =“ iconfont图标-选择m-list-title-select”> </ span> </ span> </ div>'+
        '<div class =“ m-icon-list” id =“ sb-classify”> </ div>'+
        '<！-阅读排行->'+
        '<div class =“ m-list-title”> <span>阅读排行<span class =“ iconfont icon-select m-list-title-select”> </ span> </ span> </ div>'+
        '<div class =“ m-icon-list” id =“ sb-topview”> </ div>'+
        '<！-推荐排行->'+
        '<div class =“ m-list-title”> <span>推荐排行<span class =“ iconfont icon-select m-list-title-select”> </ span> </ span> </ div>'+
        '<div class =“ m-icon-list” id =“ sb-topDiggPosts”> </ div>'+
        '<！-最新评论->'+
        '<div class =“ m-list-title”> <span>最新评论<span class =“ iconfont图标-选择m-list-title-select”> </ span> </ span> </ div>'+
        '<div class =“ m-icon-list” id =“ sb-recentComments”> </ div>'+
        '<！-文章档案->'+
        '<div class =“ m-list-title”> <span>文章档案<span class =“ iconfont icon-select m-list-title-select”> </ span> </ span> </ div>'+
        '<div class =“ m-icon-list” id =“ sb-articlearchive”> </ div>'+
        '<！-随笔档案->'+
        '<div class =“ m-list-title”> <span>随笔档案<span class =“ iconfont icon-select m-list-title-select”> </ span> </ span> </ div>'+
        '<div class =“ m-icon-list” id =“ sb-record”> </ div>'+
        '<！-自定义列表->'+
        '<span id =“ menuCustomList”> </ span>'+
        '</ nav>'+
        '<button class =“ close-button” id =“ close-button”>关闭菜单</ button>'+
        '<div class =“ morph-shape” id =“ morph-shape” data-morph-open =“ M-7.312,0H15c0,0,66,113.339,66,399.5C81,664.006,15,800,15,800H-7.312V0z; M-7.312 ，0H100c0,0,0,113.839,0,400c0,264.506,0,400,0,400H-7.312V0z“>'+
        '<svg xmlns =“ http://www.w3.org/2000/svg” width =“ 100％” height =“ 100％” viewBox =“ 0 0 100 800” serveAspectRatio =“ none”>“ +
        '<path d =“ M-7.312,0H0c0,0,0,113.839,0,400c0,264.506,0,400,0,400h-7.312V0z” />“ +
        '</ svg>'+
        '</ div>'+
        '</ div>'+
        '<button class =“ menu-button” id =“ open-button”>菜单</ button>'+
        '<div class =“ content-wrap” id =“ content-wrap”> </ div> <！-/ content-wrap->'+
        '</ div>'+
        '<div class =“ main-header”>'+
        '<canvas id =“ notHomeTopCanvas”> </ canvas>'+
        '<div class =“ vertical”>'+
        '<div class =“ main-header-content inner”>'+
        '<link href =“ https://fonts.proxy.ustclug.org/css?family=Playball” rel =“ stylesheet”>'+
        '<h1 class =“ page-title” style =“ font-family：\'Playball \'，草书；” id =“ homeTopTitle”> </ h1>'+
        '<h2 class =“ page-description” id =“ hitokoto”> </ h2>'+
        '<h3 class =“ page-author” id =“ hitokotoAuthor”> </ h3>'+
        '<h1 class =“ sb-title” id =“ sbTitle”> </ h1>'+
        '<p class =“ article-info” id =“ articleInfo”> </ p>'+
        '</ div>'+
        '</ div>'+
        '<a class =“ scroll-down” href =“ javascript：void（0）;” data-offset =“-45”>'+
        '<span class =“ hidden”>向下滚动</ span>'+
        '<i class =“ scroll-down-icon iconfont icon-fanhui”> </ i>'+
        '</a>'+
        '</ div>'+
        '<div id =“ loading”> </ div>'+
        '<div id =“ bottomProgressBar”> </ div>'+
        '<div id =“ rightMenu”> </ div>';

    window.cnblogsConfigDefault = {
        GhUserName：“ BNDong”，
        GhRepositories：“ Cnblogs-主题-SimpleMemory”，
        GhVersions：“ v1.1.2”，
        CnVersions：“”，
        blogUser：“”，
        blogAvatar：“”，
        blogStartDate：“ 2019-01-01”，
        menuCustomList：{}，
        menuNavList：[]，
        menuUserInfoBgImg：''，
        webpageTitleOnblur：“（o ﾟ v ﾟ）ノHi”，
        webpageTitleOnblurTimeOut：500，
        webpageTitleFocus：“（*´∇｀ *）欢迎回来！”，
        webpageTitleFocusTimeOut：1000，
        webpageIcon：“”，
        fontIconExtend：“”，
        进度条： {
            id：“ top-progress-bar”，
            颜色：“＃77b6ff”，
            高度：“ 2px”，
            持续时间：0.2
        }，
        正在加载：{
            反弹：{
                张力：16
                摩擦力：5
            }，
            微调框：{
                id：“ spinner”，
                半径：90，
                侧面：3
                深度：4
                颜色：{
                    背景：“＃f0f0f0”，
                    笔画：“＃272633”，
                    base：null，
                    孩子：“＃272633”
                }，
                alwaysForward：是的，
                restAt：0.5，
                renderBase：否
            }
        }，
        homeTopAnimationRendered：true，
        homeTopAnimation：{
            半径：15
            密度：0.2，
            颜色：'rgba（255,255,255，.2）'，
            clearOffset：0.3
        }，
        essayTopAnimationRendered：true，
        essayTopAnimation：{
            三次：14
            三：20，
            邻居：[“侧面”，“顶部”，“底部”]，
            speedTrailAppear：.1，
            speedTrailDisappear：.1，
            speedTriOpen：1
            TrailMaxLength：30，
            TrailIntervalCreation：100，
            delayBefore消失：2，
            颜色：[
                '＃96EDA6'，'＃5BC6A9'，
                '＃38668C'，'＃374D84'，
                '＃BED5CB'，'＃62ADC6'，
                '＃8EE5DE'，'＃304E7B'
            ]
        }，
        bgAnimationRendered：true，
        backgroundAnimation：{
            colorSaturation：“ 60％”，
            colorBrightness：“ 50％”，
            colorAlpha：0.5，
            colorCycleSpeed：5
            verticalPosition：“随机”，
            水平速度：200，
            ribbonCount：3，
            strokeSize：0，
            视差量：-0.2，
            animateSections：正确
        }，
        homeTopImg：[
            “ https://gitee.com/dbnuo/Cnblogs-Theme-SimpleMemory/raw/master/img/home_top_bg.jpg”
        ]，
        homeBannerText：“”，
        homeBannerTextType：“ jinrishici”，
        essayTopImg：[
            “ https://gitee.com/dbnuo/Cnblogs-Theme-SimpleMemory/raw/master/img/nothome_top_bg.jpg”
        ]，
        essayCodeHighlightingType：'cnblogs'，
        essayCodeHighlighting：”，
        essaySuffix：{
            codeImgUrl：”，
            aboutHtml：''，
            copyrightHtml：''，
            supportHtml：”
        }，
        bottomBlogroll：[]，
        底部的文本： {
            图标：“❤️”，
            剩下： ””，
            对： ””
        }，
        footerStyle：2
        consoleList：[]，
        bookList：[]，
        themeAuthor：否，
    };

    window.cnblogsConfig = $ .extend（true，window.cnblogsConfigDefault，window.cnblogsConfig）;
    getVersionConfig（）;

}其他{

    $（'a [name =“ top”]'）。text（“ SimpleMemory：基础配置有误，请阅读文档，检查配置！”）。css（{
        'display'：'block'，
        'text-align'：'center'，
        'padding-top'：'45vh'，
        'font-size'：'20px'，
        '颜色'：'＃333'
    }）;
}

//初始化检查
函数initCheck（）{

    //检查基本主题
    var baseStyle = $（'＃mobile-style'）。attr（'href'）;
    如果（typeof baseStyle！='undefined'）{
        var bt = baseStyle.split（'/'）;
        if（$。inArray（'SimpleMemory'，bt）！== -1）{
            返回true；
        }
    }
    返回false；
}

//获取版本配置
函数getVersionConfig（）{

    window.cnblogsConfig.CnVersions = window.cnblogsConfig.GhVersions;
    如果（window.cnblogsConfig.GhUserName ==='BNDong'）{

        $ .getScript（'https://gitee.com/dbnuo/Cnblogs-Theme-SimpleMemory/raw/master/version.js'，函数（）{
            setConfVersion（）;
        }）;

    }其他{
        var url ='https://raw.githubusercontent.com/'+ window.cnblogsConfig.GhUserName +'/'+ window.cnblogsConfig.GhRepositories +'/master/version.conf';

        $ .ajax（{
            类型：“ get”，
            网址：url，
            dataType：“文本”，
            异步：错误，
            成功：功能（配置）
            {
                window.themeVersion = conf？JSON.parse（conf）：false;
                window.themeVersion && setConfVersion（）;
            }
        }）;
    }

    函数setConfVersion（）{
        var confVersion = getEndConfVal（window.cnblogsConfig.GhVersions）;

        如果（confVersion）{
            window.cnblogsConfig.GhVersions = confVersion;
        }

        在里面（）;
    }

    函数getEndConfVal（thisGhVersion）{
        var endVal ='';
        window.themeVersion && $ .each（window.themeVersion，function（i）{
            如果（window.themeVersion [i] [0] === thisGhVersion）{
                endVal = window.themeVersion [i] [1]; 返回false；
            }
        }）;
        如果（endVal ===''）{
            返回thisGhVersion;
        }其他{
            返回getEndConfVal（endVal）;
        }
    }
}

// 在里面
函数init（）{

    //设置侧边栏html
    var url = window.location.href，tmp = [];
    tmp = url.split（“ /”）;
    var user = tmp [3];
    var navListHtml ='<li> <a href="https://www.cnblogs.com/'+user+'/" target="_self">首页</a> </ li>'+
        '<li> <a href="https://msg.cnblogs.com/send/'+user+'" target="_blank">联系</a> </ li>'+
        '<li> <a href="https://www.cnblogs.com/'+user+'/rss" target="_blank">订阅</a> </ li>'+
        '<li> <a href="https://i.cnblogs.com/" target="_blank">管理</a> </ li>'；

    var menuNavList = window.cnblogsConfig.menuNavList;
    如果（menuNavList.length> 0）{
        $ .each（menuNavList，function（i）{
            navListHtml + ='<li> <a href="'+(menuNavList[i][1])+'" target="_blank">'+（menuNavList [i] [0]）+'</a> < / li>';
        }）;
    }

    $（'＃blog-news'）。prepend（sidebarHtml）;
    $（'＃m-nav-list'）。append（navListHtml）;

    //设置用户名
    如果（window.cnblogsConfig.blogUser ===“”）window.cnblogsConfig.blogUser =用户；

    //开始缓存
    $ .ajaxSetup（{cache：true}）;

    //加载loadingJs
    $ .getScript（getJsDelivrUrl（'loading.js'），function（）{

        //加载开始
        pageLoading.initRebound（）;
        pageLoading.initSpinner（）;
        pageLoading.spinner.init（pageLoading.spring，true）;

        $ .getScript（getJsDelivrUrl（'jquery.mCustomScrollbar.min.js'），函数（）{
            $ .getScript（getJsDelivrUrl（'require.min.js'），函数（）{
                $ .getScript（getJsDelivrUrl（'config.js'），function（）{
                    var staticResource = [
                        //'optiscroll'，'ToProgress'，'rotate'，
                        'optiscroll_ToProgress_rotate'，
                        'snapSvg'，'classie'，'main4'，'tools']；
                    require（staticResource，function（）{
                        require（['base']，function（）{
                            （新Base）.init（）;
                        }）;
                    }）;
                }）;
            }）;
        }）;
    }）;
}

//获取文件网址
函数getJsDelivrUrl（文件，目录）{
    文件= setFileNameMin（文件，目录）;
    返回'https://cdn.jsdelivr.net/gh/'+(window.cnblogsConfig.GhUserName)+'/'+(window.cnblogsConfig.GhRepositories)+'@'+(window.cnblogsConfig.GhVersions)+'/ '+（文件？文件：''）;
}

//优化文件名
函数setFileNameMin（文件，目录）{
    如果（typeof file =='undefined'）返回'';
    var suffix = null，fileArr = file.split（'。'）;
    if（fileArr.length> 0 && $ .inArray（fileArr [（fileArr.length -1）]，['js'，'css']）！== -1）{
        后缀= fileArr.pop（）;
        开关（后缀）{
            案例'js'：directory ='script'; break;
            case'css'：directory ='style'; break;
        }
    }其他{
        如果（typeof directory =='undefined'）返回'';
        开关（目录）{
            案例'js'：directory ='script'; break;
            case'css'：directory ='style'; break;
        }
    }
    file.search（'。min'）=== -1 && fileArr.push（'min'）;
    后缀！= null && fileArr.push（后缀）;
    return（typeof directory！=='undefined'？（'src /'+目录+'/'+ fileArr.join（'。'））：（fileArr.join（'。'）））;
}
