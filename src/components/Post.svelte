<script>
    import readingTime from "../utils/readingTime";
    import randomEmoji from "../utils/randomEmoji"
    import formatIsoTime from "../utils/formatIsoTime"
    export let post;
</script>


<style>

    h2{
        margin:0;
    }
    img{
        max-width:100%;
        width: 40rem;
        margin-bottom:0;
        padding: 0;
    }
    .Post-image{
        margin: 0 0 0 0;
        padding: 0 0 0 0;
    }
    .Post-item {
        color:#191a22;
        position: relative;
        border-bottom: 1px solid #022534;
        margin-top:1rem;
    }
    .Post-content {
        font-size:16px;
        font-weight:300;
        display: grid;
        justify-content: space-between;

        gap:3rem;
        grid-template-columns: 1fr;
      
    }

    @media (min-width: 768px) {
        .Post-content {
        grid-template-columns: 1fr 1fr;
    }
    }

    .Post-title {
        font-size:20px;
        margin: 0;
        padding:0;
    }

    .Post-title p{
        color: #333;
        font-size:13px;
        font-weight:300;
        margin-top: 5px;
        padding: 0;
    }


    a{
        text-decoration: none;
        color: #22215b;
         
    }

    .Post-description p{
        color:#333;
        font-size:16px;
        line-height:28px;
        margin:0 auto;

        word-break: break-word;

    }

    .dot{
        font-weight: 700;
        
    }
</style>



<div class="Post-item ">
    <div class="Post-content">
       <div class="Post-head">
           <div class="Post-title">
               <h2>
                   <a rel="prefetch" href="blog/{post.slug}">{randomEmoji()} {post.title} </a>
               </h2>
               <p>
                   <time datetime={post.createAt}>
                       🗓️ {formatIsoTime(post.createdAt)}
                    </time>
                   <span class="dot">.</span>
                   <span>{readingTime(post.html)}</span>
               </p>
           </div>
           <div class="Post-tags"/>
           <div class="Post-description">
               <p>{post.desc}</p>
           </div>
        </div>
        <div class="Post-image">
            <img src={post.image} alt="">
        </div>
    </div>
</div>
