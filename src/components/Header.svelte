<script>
    import analyticsTracking from "../utils/analytics";
</script>


<style>
    .Header {
        background-color: #fafbfc;
        color: #191a22;
        padding:1em 0 0 0;
    }


    .Header-container {
        display: grid;
        grid-template-columns: minmax(auto,1024px);
        justify-content: center;
        align-items: center;
    }

    .Header-content{
        display: flex;
        justify-content: space-between;
        align-items: center;
    }

    .Header h1{
        color :#191a22;
        font-size:20px;
        font-weight:bold;
        letter-spacing:0.0px;
        cursor: pointer;
    }

    .Header h1 span{
        display: block;
        font-size:13px;
        font-weight:300;
        letter-spacing:normal;
        margin: 3em 0 0 0;
    }

    .Header ul{
        margin: 0;
        padding: 0;
        list-style: none;

    }

    .Header li{
        display: inline-block;
        margin: 0 0.5 0 0;

    }
    .Header a{
        text-decoration: none;
        font-weight: 300;
        font-size: 14px;
    }


    .Header-social img{
        width: 20px;
    }
</style>



<header class="Header">  
    <div class="Header-container">
        <div class="Header-content">
            <div class="Header-logo">
                <h1>Alan Gustavo</h1>
                <span>FrontEnd Developer</span>   
            </div>
            <div class="Header-social">
                <ul>
                    <li>
                        <a href="https://github.com/Alan13377"
                         target="_blank"
                          rel="noreferrer"
                           on:click={analyticsTracking("github")}><img src="github.png" alt="GitHub">
                        </a>
                    </li>
                    <li>
                     <a 
                        href="https://www.linkedin.com/in/alan-gustavo-6769591b0/" 
                        target="_blank" 
                        rel="noreferrer" on:click={analyticsTracking("linkedin")}>
                        <img src="github.png" alt="GitHub"><img src="linkedin.png" alt="Linkedin">
                    </a>
                    </li>
                </ul>
            </div>
        </div>
    </div>
</header>