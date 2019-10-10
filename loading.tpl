<style type="text/css">
  @-webkit-keyframes appLoadingCircle {
    0% {
      -webkit-transform-origin: 50% 50%;
      -webkit-transform: rotate(0deg);
    }
    100% {
      -webkit-transform-origin: 50% 50%;
      -webkit-transform: rotate(360deg);
    }
  }

  @keyframes appLoadingCircle {
    0% {
      transform-origin: 50% 50%;
      transform: rotate(0deg);
    }
    100% {
      transform-origin: 50% 50%;
      transform: rotate(360deg);
    }
  }

  html,
  body,
  #root {
    margin: 0;
    padding: 0;
    height: 100%;
    background-color: #f9f9f9;
  }

  #root {
    -webkit-box-pack: center;
    -ms-flex-pack: center;
    justify-content: center;
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-align: center;
    -ms-flex-align: center;
    align-items: center;
  }

  .loading {
    display: inline-block;
    background: url("/loading.svg");
    background-size: cover;
    width: 24px;
    height: 24px;
    vertical-align: middle;
    text-align: center;
    -webkit-animation: appLoadingCircle 1s infinite linear;
    animation: appLoadingCircle 1s infinite linear;
  }
</style>
<i class="loading"></i>
