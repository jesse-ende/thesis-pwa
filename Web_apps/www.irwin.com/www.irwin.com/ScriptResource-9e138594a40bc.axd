// (c) 2010 CodePlex Foundation
Type.registerNamespace("Sys.Extended.UI.Seadragon");Type.registerNamespace("Seadragon");Sys.Extended.UI.Seadragon.Config=function(){this.debugMode=!0;this.animationTime=1.5;this.blendTime=.5;this.alwaysBlend=!1;this.autoHideControls=!0;this.immediateRender=!1;this.wrapHorizontal=!1;this.wrapVertical=!1;this.minZoomDimension=.8;this.maxZoomPixelRatio=2;this.visibilityRatio=.5;this.springStiffness=5;this.imageLoaderLimit=2;this.clickTimeThreshold=200;this.clickDistThreshold=5;this.zoomPerClick=2;this.zoomPerSecond=2;this.showNavigationControl=!0;this.maxImageCacheCount=100;this.minPixelRatio=.5;this.mouseNavEnabled=!0;this.navImages={zoomIn:{REST:'WebResource.axd?d=1_2oDBa6gO0U1F20XlhqNWrUrfJRmerTp5QsuJQ_mCWS0kbvcLeEABzHnZmpbhtJ2uMCX8tsn38lddyzQAC61IuCUJYcfLVSR3cZrqluMx6duLJ8zZDmpqo0wzjIrfYSf0jkLplBGUq2mV3rBpsThQ2&t=635846924901635610',GROUP:'WebResource.axd?d=7MSDACT9MaDVaxxRnceteblPpXwWMrwyTyH3-xJk0UJwkdcblX15bHiMWNwg3CLYhQAsM-_-UpyebJNuxyqKnL5UNlzD4z4sfmVU0TVUZ7Kyj7WcWmd_0gXL66xaGgUY9JC6FHz3T2InyPmCjzkTFRkz7RgGYrklnYby9fHtmgw1&t=635846924901635610',HOVER:'WebResource.axd?d=1-i-Q53UihPusmalFHWzuLBsr1lmY3v2B4YS4xJSIAPwJ6TzFP37ZbLW4TQ1N5FaZQpnyWxLKeHGKvt7sAL06EH59VYJ3XIr6aDcgGchPWI3DdgdrtgNDq8g5jY1TG177QpKxHOn26wywzmSUF0c-A2&t=635846924901635610',DOWN:'WebResource.axd?d=wmdTsKjesphQNB0gSYgZpIGBoNXrKUODJ9471Oj4iirIxiZe5FvWR3gof7kJTjysL1jHZhmlcsB9J1fOYweJF4NfvvHB-d99Ca2Oi3I-n-gZgUw22UD40V-kIFYnXO6RLERUhApDR540OUuPL6XFyQ2&t=635846924901635610'},zoomOut:{REST:'WebResource.axd?d=eppiS99ULYkV_qfq1xLP13JxMGcWINqJjgRa_3pe62n4aInrAibmFQs2e4hzM0lnEXULiU689H_WRxFlpYMiHbVb-zi0wEeSv0be5rVJ9OvVuZtX8jEHMT-G8ExCroIzrELA5aOe0Mxm5M0q5dvy9g2&t=635846924901635610',GROUP:'WebResource.axd?d=1gaaq5zU8MwOTWd2LbewJzC_f_RWZGB6bf76JsjgopG7RSKjRu8tSfXf7CafRqY9aSb2yh6n9co6zPN-xsqcRUvrcQwKcsFFO1s0utt9zJx_-gSZiaQjHZw4xC6f-O_kcdJTy2Pkt6im18a8XV73KQVyzqhozwALI3AtAY-AngQ1&t=635846924901635610',HOVER:'WebResource.axd?d=id_rXR8cKt4uaPxmoMo22WtZPcaFIVzLoNObWaL7gWE_Kc_01KnorVdDDsm-LaF8KNynkC_bUzxnkC9R-UVU0zb1DOaq1Wm4ZzkE21EZ8-Hi8vXoeNzXUTDQqyy-vO_hS_8SUCB9LOr7IMQXDhX48Q2&t=635846924901635610',DOWN:'WebResource.axd?d=Xs1SvYkK9SUGxyb4eRvDKo70DMmngeegCPSjlBwnXnx21MFObqI-pGzIgtC2Yj7ae1rcUKaHCqPAlbpis6zCZsWN1z7bW__qwX-L1qCpwphz9b_ozZNjO66nTx9F6wJA0MMGwibBhZ8evXwlUIB2x-5Z7pGxnm69717o__RnNqk1&t=635846924901635610'},home:{REST:'WebResource.axd?d=K041J8Z5BSesm3pmGu3OpzvCi9gNHpZlJjUB9Tt6byVp0dGFRmErXa_oQJ3FCujywFJmQFO2L1ErTBPwfOMh-u0TlXruzDXys7AXYLyivuuxyvuQEYBjoGCfiwgL6lJjT1nUu_sR5i_KRgvTEGCFgA2&t=635846924901635610',GROUP:'WebResource.axd?d=2xXiZ1UZW_mrbD5yRTyBoFWJjiryS5sGUPXSt83YCtA3lM-4QkFayD3GVKqOc4fRmPmJHP4UVh9LnrdTvbEG6sZ4LFI8Fn8M4Goh4zxhvquRevmFQdjb6q6OQDdXwL2TxMm9Ea-F2yN7Rvc5Kt35wlX8TzuN2t5al3VfQdxt5GI1&t=635846924901635610',HOVER:'WebResource.axd?d=Hg47c8_-oQhtR8I4sSFfu-IJYfhPthsTNdpJs78YNkeorDOeBgsLriErAcUxrXBnhzy9gUpX4m6UNfWKJdk372qOPd5OCfkn5D3UmmV5w-FXtzuRP7LYkKNVj9SMKaWGNeRk-DNi4rY8cH-OMXp9bw2&t=635846924901635610',DOWN:'WebResource.axd?d=zRe1UYepMPlwGVH1FQlfT_w7u7OV3R9t9-Pm8gWnkPSH7C2Jjwb1dp2bBf59Ve6SObDp5JdXenT_67aS4Mw9e8j3vYTMtODQkZUJ4nlf6sc-Vv8DLR9i0STdkhI4m5Sc-2NtrHMexvkgdjXjj0Gm4A2&t=635846924901635610'},fullpage:{REST:'WebResource.axd?d=sjvo_peLZ1vZR1RFz4aCm143r-0vUHs0SfYoF6ML8GJik4SFry1kE8H1gdWaYpznQz45muaa9QOEFTLJlesftWH5Mll0HrWqTvFnnBHOCvvm6M1CME0qSSX79hbo2Onc7jbdK5yHOZoG9I_pqQshEQ2&t=635846924901635610',GROUP:'WebResource.axd?d=wIUBjAlYKg0I94H6KiCYTBPm6uFKZ3R49-s578tUyt9tTHkqQU-eeqkAVuB2RXbzx60eSSPhQenf74rO3ANAPnlahvzF5Uhal7Iw_XmxgeG_vskhzWV0mIEc_bY5-TAr35uTA72__mVQtkgwCIlFn2uVrBf4eNmGcTuZ1rBeP1Y1&t=635846924901635610',HOVER:'WebResource.axd?d=9anpf98fa52ttIGrGOhtvZGoalhcfGMJ2YBJP-lbZp3xlnULwUbnHBrH5AMtsBCZ1a8RuB8auvd4mSOnoNWJqjUcFqP1kEQYe72z1nW7NGOJ8oES4JuHR81LlVks_okbGClOvV19UQy6qd4nkwbMzg2&t=635846924901635610',DOWN:'WebResource.axd?d=Q6_3mbfwmbfRR7w1sDOvCpue2fOK-Z8aypQ5K8xuI0RRmpHIGZuO73icFiDenjggSZtvg4klPLtcA2zBQPwLhzdxWo4krzHyiakGsO7Ikr_lPCnl5VNpT2nvM2GCxzkLgrqO5modwfBBn1ApzMPozGHH5G3yjvMWuTmTugpP0l01&t=635846924901635610'}}};Sys.Extended.UI.Seadragon.Config.registerClass("Sys.Extended.UI.Seadragon.Config",null,Sys.IDisposable);