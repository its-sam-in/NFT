// script.js
const validIDs = new Set([
  "bc1ptj8u0lr0yfezuf6zhhp62s2dxfx6mx322m9zp7578v6352uxqh8sguk4ll",
  "bc1p6vrxyvfdncrpnwq9mh7daauesf36gs4c49m89wr4llr83jev578q7426fl",
  "bc1ps7x7hsjzp28e4fy8snyue4f6mrsktskels0d8ewe9z6r5lxv2ujqgnchat",
  "bc1peqcdcjppuhfecg2k0700y9lq5eqjcfq2z2rdhe6ehp5n2tghgwxqshs3la",
  "bc1pyxr9pmptju4r6gq8v2cjs433jlwu8p78ulnkqsxn375450kmaqvqa8zmde",
  "bc1puymjegp78yauul2clchj69ne6fkw8zga3wdj7ghd9d0ddm9s2wmspr8n78",
  "bc1pts0skyqz40srhhzwjslqxv8snd5f4r6p5f3uj8l3vcksr2r7dstqthvecm",
  "bc1py7f2ntadtdqh3dlrdggg9hvc2u7hk86el3vdmjh0hyzr8qp20pkqmagxck",
  "bc1p9h0cef8xs0aswwccu2przr9zqktv84pq7ze677m0clvyejs2vlts38vvfs",
  "bc1px5gcemzkcjqpg328m6jz2v35pjqk3g69u26tm8wjc73um7tvl48s3hnqww",
  "bc1pd3f2vsrec2f5kwd93nsk5wsm3j9zkzvzttyramd652h03jzcgm8s0mp8pc",
  "bc1py0hhwfa3uquhjmrv3mm5g34278qcrdzlxw4x94e9ldamjuxut5uq54m85e",
  "bc1p6tl20ehjdhyejhc2f20q549trw2edqw03gqm8vcvu9nke4d78swskdj3nz",
  "bc1p9l2uur7d8h27aqv0ntleu0q9sv7x5k64ce2t94mxslwv7h7q2s0q6jh7rg",
  "bc1pezmh65flyr7u5t2d4mvjhdrjy6mz38qzfnqxj3h8zyadcagtv7zq9d3ku0",
  "bc1pz7xwp7248ef5400qyht78wd9gwd27q7ynun2zxv7jm0hcrcwfncq3ngwve",
  "bc1pccf2258lz4vsqskxyyvh7ppvq8js23stw6ccy2a3sj6ugzp9ca9swc3u7r",
  "bc1p0pzej2ktgs889dydvvustzteqhfc2hr4sz23kjutu5yafx8yxfnqaf22vl",
  "bc1prtvqv02ajutvadswa9v6pprw0dq0qdqj78698vlntjw3fgj4htpqgn4ndn",
  "bc1p9n9l4k3xr6pwcu30nwuw5d6tdtkzvl5h8z4c5cn0eapy26l2twmsn3ut45",
  "bc1pccv9qnw9te3qza9ypkta40lkqd9wg2gjal8gz7xekuw3jxck656sud8s6w",
  "bc1p07pzmaudqx0fj2cw4l5cvav22ujelz0rxp5ea3nlmfjy9sqv3maqp3t42v",
  "bc1pdemvrt5y6uw4xjd9s4pm844atzm0433xxr9qq0qd0quhv68pfyjqrhc6vt",
  "bc1pauv94m2mdjn0qrpvre0za50k42g60pwvprh9dnqqlz9tm5n8lckqml2rza",
  "bc1pjywjda6ctpszwzkhe6w2x35fhe3juagddr6wzkcnkl77qp892ymsx4j4aq",
  "bc1p4aheknqdwr8ecsxm6txck63kq3h2aj9mrzntpn5n4hsltjeq6qmqp5fwzf",
  "bc1pwlx6zxd5rud6rx5zrwwp786r5mhlnhegls4vpf3aunaf3xvfvfrst4fknv",
  "bc1pkuzxfx3vz2kvjd0c8ejdy0s5q374nrgpexxfjx7ykhs98l0tnjysswx5rk",
  "bc1plvlyjc4xr2uzseqfuqqat7kh9e735lk2xxt85fk0gvhkglgrtavsh4s634",
  "bc1pq8mjeewh380w0sa84v0wv3ht9yzv35wgfds7nr0ukjd8m2pl0whs5w2hrl",
  "bc1pexnxslwfp409hum7yk9jd9zpqjvkdqttlvdj2xslprf07ndl6cpqw7ag7g",
  "bc1p55y9c2r86gdtwfeqgn4lftyryvulf2udhn3nrmlyzke9paxve2xstw3mx2",
  "bc1p0fpen3h36f59e4r2cw3ms9vpnjtaw322pds4sqw626yqxt8jdvgqk03ehc",
  "bc1pjcpxyv8kmlctc0nhjw28czaafh4zvr54jxdkrdueesmqww3uwdzqkr3kw2",
  "bc1ppjymje6hegare3u8ffut5lhqkp2cyqqs74qwh89d06ltwe2496lsyrvljp",
  "bc1pap9m4l3cnrhqqpzyghljllflts5u5h6rvn2qlhfvj8d42jkqvz2q2mrkhg",
  "bc1pdtgq6mjptwxel00vp22s2rvykl4466yns90wy686mwqmvdnscs6q7f034k",
  "bc1paj2u350ac9dtf0datpzme6dx5gale08rqsjla8vwg5daagalmxqqw7kdu3",
  "bc1pq06hvk5tn44hxmc27l54f4p768t8juucykyq20y4tssvaukjug3sn2jzml",
  "bc1p8zhh436pywvk2j4aay443jc3f3sya4f5k6u7whasc7ynz27th8tq5y87d3",
  "bc1pm98unr2qv3hm4pjhw3598jlrnl5jjmdw2pwpmsg3hm63h4j56muqgtflax",
  "bc1p8p4cs3hlz2azjnpucrt67nna6nlzfwgd33w60ryxdv2y0nhv08hsappv9f",
  "bc1p8rjxt5v0gcvcv8al2kj4nrrfwzww0nsw0n53w7xufyvalth5h9ps5253st",
  "bc1p2txunhntkshp6e275czqf0jpqf9xr7tzv7w4npmpaks448prvayqhj35gh",
  "bc1pguey4vy4wxxxedq4kk7rje8j0jw2nfsmttczvnsfjtclwx5lwtcsj9sen4",
  "bc1ppqpeysj5j7dkcjscuwcsj6xt0s0hjsrk83y320pkwusfy86zj5rspjgp3n",
  "bc1p9x4azr4dfcj54skyk2uh5hz8kd04su67pwsdgmnz792vw03099qqqkjxes",
  "bc1pvp22qkq03r5hpue7azvtrqrayy9x27uzj6qwezvds4q9k04hheys6fvj6u",
  "bc1pzfqeetgectpeh5zxslf65k2juwgv0xmun6xm8vugqa40d66ey97qj9lfcd",
  "bc1p9uf47zq0uxgdnuljw3h3m857dxdkrkkk07rzpnvvaqgszhcrw3gslus4rp",
  "bc1pw294nlgd9c7wmcauqlk68t3pe5tl6fglwgk7879pshal50ykqz0s4f9pg8",
  "bc1pz5l263rm07manzm5g29u5ajx3vrheh7kpswpdcueh7n5rhm999usq38kt9",
  "bc1p9zlvjrag85nr9ufdn2gm65tknj6c0jnt2uz9j8dwfwhew7eywgyq3p9zlj",
  "bc1pataamaca5zl7uw63fp8lx0f7fd87z78j3sw08uk0zs327c49dlkqm2e7xa",
  "bc1pndneewm2t5qhmdfcfgqs5fesn2ul8mcas0uzykje4vc3wn9zv4jqupns77",
  "bc1pvaly2qjguayvywvtuf8mr53p4qkz35njrx64he40r0hdtq0kr34qyxw52l",
  "bc1p932snfyl2wc2l9kz92yrseemeksup8uhzej72rakfxmhx8nqn56qntq0eu",
  "bc1pjnjcn4h7j5qjae0ncqhm2sl52z4u5zphwnkwd8s0h83lc3eeccsq998dwg",
  "bc1pjtrjqgl4mvcfw3qrmram7n6pqh27p9p2lvwehju4vuz9anq82wlqs68ff4",
  "bc1ps5heu50x4hcrtkmqwsy27uv0yy8kfzftllpawqr97av3sw32w8lsap5ggh",
  "bc1p5c5x6tj592s2zzhzrzd94mmswvua4j7yup3drcrusxzhw9tnq5psqre9zm",
  "bc1peffaenhycsvad54m7efru3e36p3k3vskw3drl2q2vcspw0cu043q96z33k",
  "bc1pcz6z5tjm62vyapzcz7cde73ylut85xvmm3zdjew72f8sksqsnqmqeaeqmr",
  "bc1p7ux8gq3lfvshascq37n5dq7k9x0px0mc5n068hnqzxpx9xwe6mssgpjd4x",
  "bc1pymxqfgypxvldxl0wun9ryf53ugzgq6zxj4aklhqdnsagdgj08erqhz78vd",
  "bc1p5vq5w9c8drmrtdld070l93y7k5aj3hn6j6evqu97jjhr3h6wf5wq60nfeu",
  "bc1p4r4zryc33x76h8w3lfa7tg6wyu5ntl8zurjf2pu68hnt3shuzres9s9eq4",
  "bc1p2tdm9yd673xfjenlqgtque76fxdw7j553223nl7lnlyflseamans0m9y8u",
  "bc1pg593xxe8u2528m4xs8v72sdwqef3y9ydxd3xwvxj0mjvklf95myqxhkz03",
  "bc1pf66k54rrpegvjj6l445tq0k2m9c0505ft3dhf9qjqet5rck7c8vqfamt8r",
]);

function checkID() {
  var inputID = document.getElementById("idInput").value.trim();

  if (inputID.substr(0, 4) !== "bc1p") {
    document.getElementById("result").innerHTML =
      "NOTE: The first 4 characters of the ID should be 'bc1p'.";
    return;
  }

  if (validIDs.has(inputID)) {
    document.getElementById("result").innerHTML =
      "Congratulations! You are eligible.";
  } else {
    document.getElementById("result").innerHTML =
      "Sorry, you are not eligible.";
  }
}
