<?php include_once('header.php'); ?>
<header>
  <h1>onScreen: Lazy Load for Images</h1>
  <p>This demonstrates how to use a lazy loader for your images.</p>
</header>
<section class="posts">
  <article class="post">
    <img alt="User Photo" src="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAMCAgMCAgMDAwMEAwMEBQgFBQQEBQoHBwYIDAoMDAsVCwsNDh0QDQ4RDgsLEBYQERMUFRUTDA8XGBYUEhIXFRABAwQEAgICCQICCQgCAgIICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICP/AABEIAC4ALgMBEQACEQEDEQH/xAAZAAEAAwEBAAAAAAAAAAAAAAAHBQYIBAP/xAA1EAABAwIFAgQDBQkAAAAAAAABAgMEBREABgcSITFBEyJRYQhCcRUjQ+HxFDJSgZGhscHR/8QAFAEBAAAAAAAAAAAAAAAAAAAAAP/EABQRAQAAAAAAAAAAAAAAAAAAAAD/2gAMAwEAAhEDEQA/AMT6bURMxTQ23vbAaGj5domU8vKq1bfaiRUWF1kblE9AkdzgDWJ8RmVFOKbk0dyMi3lcQoOC/a4tx9f7egWPLuq2TMwSgw6GEsr/ABd4QpPPdJ6/lgJHP2QIJpwm09xuRGWNyVtEEG/uMBmvN9GDMu23v6YBY0IpRmSGbjjjAHPxAZ2VmbOMiO1IfXEhuFCGS8FtoVYIO0Dpe3INyDfkXIAVjL2nsyurCpCJMKK4EpadbZU4NxJHNutykj0v3FsBx13KErKTjS3F3vwAeDfpyD0/5gGTQHUWTNkP5TmrckxZSFGKpah9ytIUs8Wudw468bU+pwERqPBEepFNvmwCnohT1oguBlILxaUEBQuL24wGV59EejZvXT1NbFJl+GWkKKlGyr8FXJNjYf7wGwck5fdyazRH4saHUGlOIR9nmquFD4/e+8QpJ8MpspZ2902IwBpr0hGbaY5mFcJMJ2SgPBxuZcNi1ggNgcEXJ5F+D07APae1aZl3OUZ0Qf2yoRHVIRGTc+flJuR6G/8AMDAJGoklUqahxxssuqsVNkglJtyLjALOh7qVrZR6i3GAFNb8oQdL9TqfJjMSI0eVLMlbchKim3iC+1Z69Vd79++Ad5VXzRUWo79OrqGocaIotMqbR5PKUq5Ke4Juok2GAKdW8+1WPkWBCqC2GqggJYiBgAKQgAW3WFjaxPA6WGArOhWmUuqVI5iTMSim00nxVNEKLjtvKn/JJ9B6ngOvPrm+oqJ/iwF702zbTsnRUT6rNagRUclx5Vr/AEHUn2HOAUx8TWXdXqZVMr5aozFUqDDCXUOVyIlTb6dwS4WWyblSUm/mtz8pAwEBF04q6qapym1RDLLiCFMSGyvYehsb4Cg1nR9+p12Ama19shDhD5d3Ja2lJCrlJukDre/W3XpgJCia0adw6TLyxRG26AliQ4gblbo8og7QpDvfcAD5rHtc9cAd51AelBaCFJUbgg3BGACpcx+c+XZDq3nD8yzf9B7YD1ptUl0eexNgSXYcxhW9p9hZQtB9iOmAYKN8WueaXGDMhNNqiu78mOpDivqW1AH+mArWd9fs4Z6hOwZUxqn051O12HTWvBQ4O+43KlD2Jt7YA5GAkqdX51KQUR3yGj+GvzJH0B6YD//Z">
    <div class="postInfo">
      <h2>Silvestre Herrera</h2>
      <small>Shared privately - Oct 22, 2013</small>
    </div>
    <p>You think water moves fast? You should see ice. It moves like it has a mind. Like it knows it killed the world once and got a taste for murder. After the avalanche, it took us a week to climb out. Now, I don't know exactly when we turned on each other, but I know that seven of us survived the slide... and only five made it out.</p>
    <p>Now we took an oath, that I'm breaking now. We said we'd say it was the snow that killed the other two, but it wasn't. Nature is lethal but it doesn't hold a candle to man.</p>
    <div class="postAttachment">
      <img src="data:image/gif;base64,R0lGODlhAQABAIAAAP///wAAACH5BAEAAAAALAAAAAABAAEAAAICRAEAOw==" data-lazy="http://paradiseintheworld.com/wp-content/uploads/2012/02/malaysia-tourism-island.jpg">
    </div>
    <ul class="comments">
      <li>
        <img alt="User Photo" src="data:image/jpeg;base64,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">
        <div class="content">
          <h2>Gabriela</h2>
          <small>Oct 22, 2013</small>
          <p>Look, just because I don't be givin' no man a foot massage don't make it right for Marsellus to throw Antwone into a glass motherfuckin' house, fuckin' up the way the nigger talks. Motherfucker do that shit to me, he better paralyze my ass, 'cause I'll kill the motherfucker, know what I'm sayin'?</p>
        </div>
      </li>
      <li>
        <img alt="User Photo" src="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAMCAgMCAgMDAwMEAwMEBQgFBQQEBQoHBwYIDAoMDAsVCwsNDh0QDQ4RDgsLEBYQERMUFRUTDA8XGBYUEhIXFRABAwQEAgICCQICCQgCAgIICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICP/AABEIAC4ALgMBEQACEQEDEQH/xAAZAAEAAwEBAAAAAAAAAAAAAAAHBQYIBAP/xAA1EAABAwIFAgQDBQkAAAAAAAABAgMEBREABgcSITFBEyJRYQhCcRUjQ+HxFDJSgZGhscHR/8QAFAEBAAAAAAAAAAAAAAAAAAAAAP/EABQRAQAAAAAAAAAAAAAAAAAAAAD/2gAMAwEAAhEDEQA/AMT6bURMxTQ23vbAaGj5domU8vKq1bfaiRUWF1kblE9AkdzgDWJ8RmVFOKbk0dyMi3lcQoOC/a4tx9f7egWPLuq2TMwSgw6GEsr/ABd4QpPPdJ6/lgJHP2QIJpwm09xuRGWNyVtEEG/uMBmvN9GDMu23v6YBY0IpRmSGbjjjAHPxAZ2VmbOMiO1IfXEhuFCGS8FtoVYIO0Dpe3INyDfkXIAVjL2nsyurCpCJMKK4EpadbZU4NxJHNutykj0v3FsBx13KErKTjS3F3vwAeDfpyD0/5gGTQHUWTNkP5TmrckxZSFGKpah9ytIUs8Wudw468bU+pwERqPBEepFNvmwCnohT1oguBlILxaUEBQuL24wGV59EejZvXT1NbFJl+GWkKKlGyr8FXJNjYf7wGwck5fdyazRH4saHUGlOIR9nmquFD4/e+8QpJ8MpspZ2902IwBpr0hGbaY5mFcJMJ2SgPBxuZcNi1ggNgcEXJ5F+D07APae1aZl3OUZ0Qf2yoRHVIRGTc+flJuR6G/8AMDAJGoklUqahxxssuqsVNkglJtyLjALOh7qVrZR6i3GAFNb8oQdL9TqfJjMSI0eVLMlbchKim3iC+1Z69Vd79++Ad5VXzRUWo79OrqGocaIotMqbR5PKUq5Ke4Juok2GAKdW8+1WPkWBCqC2GqggJYiBgAKQgAW3WFjaxPA6WGArOhWmUuqVI5iTMSim00nxVNEKLjtvKn/JJ9B6ngOvPrm+oqJ/iwF702zbTsnRUT6rNagRUclx5Vr/AEHUn2HOAUx8TWXdXqZVMr5aozFUqDDCXUOVyIlTb6dwS4WWyblSUm/mtz8pAwEBF04q6qapym1RDLLiCFMSGyvYehsb4Cg1nR9+p12Ama19shDhD5d3Ja2lJCrlJukDre/W3XpgJCia0adw6TLyxRG26AliQ4gblbo8og7QpDvfcAD5rHtc9cAd51AelBaCFJUbgg3BGACpcx+c+XZDq3nD8yzf9B7YD1ptUl0eexNgSXYcxhW9p9hZQtB9iOmAYKN8WueaXGDMhNNqiu78mOpDivqW1AH+mArWd9fs4Z6hOwZUxqn051O12HTWvBQ4O+43KlD2Jt7YA5GAkqdX51KQUR3yGj+GvzJH0B6YD//Z">
        <div class="content">
          <h2>Silvestre Herrera</h2>
          <small>Oct 22, 2013</small>
          <p>The path of the righteous man is beset on all sides by the iniquities of the selfish and the tyranny of evil men. Blessed is he who, in the name of charity and good will, shepherds the weak through the valley of darkness, for he is truly his brother's keeper and the finder of lost children. And I will strike down upon thee with great vengeance and furious anger those who would attempt to poison and destroy My brothers. And you will know My name is the Lord when I lay My vengeance upon thee.</p>
        </div>
      </li>
      <li><input type="text" placeholder="Add a comment..."></li>
    </ul>
  </article>
  <article class="post">
    <img alt="User Photo" src="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAMCAgMCAgMDAwMEAwMEBQgFBQQEBQoHBwYIDAoMDAsVCwsNDh0QDQ4RDgsLEBYQERMUFRUTDA8XGBYUEhIXFRABAwQEAgICCQICCQgCAgIICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICP/AABEIAC4ALgMBEQACEQEDEQH/xAAZAAEAAwEBAAAAAAAAAAAAAAAHBQYIBAP/xAA1EAABAwIFAgQDBQkAAAAAAAABAgMEBREABgcSITFBEyJRYQhCcRUjQ+HxFDJSgZGhscHR/8QAFAEBAAAAAAAAAAAAAAAAAAAAAP/EABQRAQAAAAAAAAAAAAAAAAAAAAD/2gAMAwEAAhEDEQA/AMT6bURMxTQ23vbAaGj5domU8vKq1bfaiRUWF1kblE9AkdzgDWJ8RmVFOKbk0dyMi3lcQoOC/a4tx9f7egWPLuq2TMwSgw6GEsr/ABd4QpPPdJ6/lgJHP2QIJpwm09xuRGWNyVtEEG/uMBmvN9GDMu23v6YBY0IpRmSGbjjjAHPxAZ2VmbOMiO1IfXEhuFCGS8FtoVYIO0Dpe3INyDfkXIAVjL2nsyurCpCJMKK4EpadbZU4NxJHNutykj0v3FsBx13KErKTjS3F3vwAeDfpyD0/5gGTQHUWTNkP5TmrckxZSFGKpah9ytIUs8Wudw468bU+pwERqPBEepFNvmwCnohT1oguBlILxaUEBQuL24wGV59EejZvXT1NbFJl+GWkKKlGyr8FXJNjYf7wGwck5fdyazRH4saHUGlOIR9nmquFD4/e+8QpJ8MpspZ2902IwBpr0hGbaY5mFcJMJ2SgPBxuZcNi1ggNgcEXJ5F+D07APae1aZl3OUZ0Qf2yoRHVIRGTc+flJuR6G/8AMDAJGoklUqahxxssuqsVNkglJtyLjALOh7qVrZR6i3GAFNb8oQdL9TqfJjMSI0eVLMlbchKim3iC+1Z69Vd79++Ad5VXzRUWo79OrqGocaIotMqbR5PKUq5Ke4Juok2GAKdW8+1WPkWBCqC2GqggJYiBgAKQgAW3WFjaxPA6WGArOhWmUuqVI5iTMSim00nxVNEKLjtvKn/JJ9B6ngOvPrm+oqJ/iwF702zbTsnRUT6rNagRUclx5Vr/AEHUn2HOAUx8TWXdXqZVMr5aozFUqDDCXUOVyIlTb6dwS4WWyblSUm/mtz8pAwEBF04q6qapym1RDLLiCFMSGyvYehsb4Cg1nR9+p12Ama19shDhD5d3Ja2lJCrlJukDre/W3XpgJCia0adw6TLyxRG26AliQ4gblbo8og7QpDvfcAD5rHtc9cAd51AelBaCFJUbgg3BGACpcx+c+XZDq3nD8yzf9B7YD1ptUl0eexNgSXYcxhW9p9hZQtB9iOmAYKN8WueaXGDMhNNqiu78mOpDivqW1AH+mArWd9fs4Z6hOwZUxqn051O12HTWvBQ4O+43KlD2Jt7YA5GAkqdX51KQUR3yGj+GvzJH0B6YD//Z">
    <div class="postInfo">
      <h2>Silvestre Herrera</h2>
      <small>Shared privately - Oct 22, 2013</small>
    </div>
    <p>You think water moves fast? You should see ice. It moves like it has a mind. Like it knows it killed the world once and got a taste for murder. After the avalanche, it took us a week to climb out. Now, I don't know exactly when we turned on each other, but I know that seven of us survived the slide... and only five made it out.</p>
    <p>Now we took an oath, that I'm breaking now. We said we'd say it was the snow that killed the other two, but it wasn't. Nature is lethal but it doesn't hold a candle to man.</p>
    <div class="postAttachment">
      <img src="data:image/gif;base64,R0lGODlhAQABAIAAAP///wAAACH5BAEAAAAALAAAAAABAAEAAAICRAEAOw==" data-lazy="http://i.telegraph.co.uk/multimedia/archive/02464/caribbean_2464021b.jpg">
    </div>
    <ul class="comments">
      <li>
        <img alt="User Photo" src="data:image/jpeg;base64,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">
        <div class="content">
          <h2>Gabriela</h2>
          <small>Oct 22, 2013</small>
          <p>Look, just because I don't be givin' no man a foot massage don't make it right for Marsellus to throw Antwone into a glass motherfuckin' house, fuckin' up the way the nigger talks. Motherfucker do that shit to me, he better paralyze my ass, 'cause I'll kill the motherfucker, know what I'm sayin'?</p>
        </div>
      </li>
      <li>
        <img alt="User Photo" src="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAMCAgMCAgMDAwMEAwMEBQgFBQQEBQoHBwYIDAoMDAsVCwsNDh0QDQ4RDgsLEBYQERMUFRUTDA8XGBYUEhIXFRABAwQEAgICCQICCQgCAgIICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICP/AABEIAC4ALgMBEQACEQEDEQH/xAAZAAEAAwEBAAAAAAAAAAAAAAAHBQYIBAP/xAA1EAABAwIFAgQDBQkAAAAAAAABAgMEBREABgcSITFBEyJRYQhCcRUjQ+HxFDJSgZGhscHR/8QAFAEBAAAAAAAAAAAAAAAAAAAAAP/EABQRAQAAAAAAAAAAAAAAAAAAAAD/2gAMAwEAAhEDEQA/AMT6bURMxTQ23vbAaGj5domU8vKq1bfaiRUWF1kblE9AkdzgDWJ8RmVFOKbk0dyMi3lcQoOC/a4tx9f7egWPLuq2TMwSgw6GEsr/ABd4QpPPdJ6/lgJHP2QIJpwm09xuRGWNyVtEEG/uMBmvN9GDMu23v6YBY0IpRmSGbjjjAHPxAZ2VmbOMiO1IfXEhuFCGS8FtoVYIO0Dpe3INyDfkXIAVjL2nsyurCpCJMKK4EpadbZU4NxJHNutykj0v3FsBx13KErKTjS3F3vwAeDfpyD0/5gGTQHUWTNkP5TmrckxZSFGKpah9ytIUs8Wudw468bU+pwERqPBEepFNvmwCnohT1oguBlILxaUEBQuL24wGV59EejZvXT1NbFJl+GWkKKlGyr8FXJNjYf7wGwck5fdyazRH4saHUGlOIR9nmquFD4/e+8QpJ8MpspZ2902IwBpr0hGbaY5mFcJMJ2SgPBxuZcNi1ggNgcEXJ5F+D07APae1aZl3OUZ0Qf2yoRHVIRGTc+flJuR6G/8AMDAJGoklUqahxxssuqsVNkglJtyLjALOh7qVrZR6i3GAFNb8oQdL9TqfJjMSI0eVLMlbchKim3iC+1Z69Vd79++Ad5VXzRUWo79OrqGocaIotMqbR5PKUq5Ke4Juok2GAKdW8+1WPkWBCqC2GqggJYiBgAKQgAW3WFjaxPA6WGArOhWmUuqVI5iTMSim00nxVNEKLjtvKn/JJ9B6ngOvPrm+oqJ/iwF702zbTsnRUT6rNagRUclx5Vr/AEHUn2HOAUx8TWXdXqZVMr5aozFUqDDCXUOVyIlTb6dwS4WWyblSUm/mtz8pAwEBF04q6qapym1RDLLiCFMSGyvYehsb4Cg1nR9+p12Ama19shDhD5d3Ja2lJCrlJukDre/W3XpgJCia0adw6TLyxRG26AliQ4gblbo8og7QpDvfcAD5rHtc9cAd51AelBaCFJUbgg3BGACpcx+c+XZDq3nD8yzf9B7YD1ptUl0eexNgSXYcxhW9p9hZQtB9iOmAYKN8WueaXGDMhNNqiu78mOpDivqW1AH+mArWd9fs4Z6hOwZUxqn051O12HTWvBQ4O+43KlD2Jt7YA5GAkqdX51KQUR3yGj+GvzJH0B6YD//Z">
        <div class="content">
          <h2>Silvestre Herrera</h2>
          <small>Oct 22, 2013</small>
          <p>The path of the righteous man is beset on all sides by the iniquities of the selfish and the tyranny of evil men. Blessed is he who, in the name of charity and good will, shepherds the weak through the valley of darkness, for he is truly his brother's keeper and the finder of lost children. And I will strike down upon thee with great vengeance and furious anger those who would attempt to poison and destroy My brothers. And you will know My name is the Lord when I lay My vengeance upon thee.</p>
        </div>
      </li>
      <li><input type="text" placeholder="Add a comment..."></li>
    </ul>
  </article>
  <article class="post">
    <img alt="User Photo" src="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAMCAgMCAgMDAwMEAwMEBQgFBQQEBQoHBwYIDAoMDAsVCwsNDh0QDQ4RDgsLEBYQERMUFRUTDA8XGBYUEhIXFRABAwQEAgICCQICCQgCAgIICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICP/AABEIAC4ALgMBEQACEQEDEQH/xAAZAAEAAwEBAAAAAAAAAAAAAAAHBQYIBAP/xAA1EAABAwIFAgQDBQkAAAAAAAABAgMEBREABgcSITFBEyJRYQhCcRUjQ+HxFDJSgZGhscHR/8QAFAEBAAAAAAAAAAAAAAAAAAAAAP/EABQRAQAAAAAAAAAAAAAAAAAAAAD/2gAMAwEAAhEDEQA/AMT6bURMxTQ23vbAaGj5domU8vKq1bfaiRUWF1kblE9AkdzgDWJ8RmVFOKbk0dyMi3lcQoOC/a4tx9f7egWPLuq2TMwSgw6GEsr/ABd4QpPPdJ6/lgJHP2QIJpwm09xuRGWNyVtEEG/uMBmvN9GDMu23v6YBY0IpRmSGbjjjAHPxAZ2VmbOMiO1IfXEhuFCGS8FtoVYIO0Dpe3INyDfkXIAVjL2nsyurCpCJMKK4EpadbZU4NxJHNutykj0v3FsBx13KErKTjS3F3vwAeDfpyD0/5gGTQHUWTNkP5TmrckxZSFGKpah9ytIUs8Wudw468bU+pwERqPBEepFNvmwCnohT1oguBlILxaUEBQuL24wGV59EejZvXT1NbFJl+GWkKKlGyr8FXJNjYf7wGwck5fdyazRH4saHUGlOIR9nmquFD4/e+8QpJ8MpspZ2902IwBpr0hGbaY5mFcJMJ2SgPBxuZcNi1ggNgcEXJ5F+D07APae1aZl3OUZ0Qf2yoRHVIRGTc+flJuR6G/8AMDAJGoklUqahxxssuqsVNkglJtyLjALOh7qVrZR6i3GAFNb8oQdL9TqfJjMSI0eVLMlbchKim3iC+1Z69Vd79++Ad5VXzRUWo79OrqGocaIotMqbR5PKUq5Ke4Juok2GAKdW8+1WPkWBCqC2GqggJYiBgAKQgAW3WFjaxPA6WGArOhWmUuqVI5iTMSim00nxVNEKLjtvKn/JJ9B6ngOvPrm+oqJ/iwF702zbTsnRUT6rNagRUclx5Vr/AEHUn2HOAUx8TWXdXqZVMr5aozFUqDDCXUOVyIlTb6dwS4WWyblSUm/mtz8pAwEBF04q6qapym1RDLLiCFMSGyvYehsb4Cg1nR9+p12Ama19shDhD5d3Ja2lJCrlJukDre/W3XpgJCia0adw6TLyxRG26AliQ4gblbo8og7QpDvfcAD5rHtc9cAd51AelBaCFJUbgg3BGACpcx+c+XZDq3nD8yzf9B7YD1ptUl0eexNgSXYcxhW9p9hZQtB9iOmAYKN8WueaXGDMhNNqiu78mOpDivqW1AH+mArWd9fs4Z6hOwZUxqn051O12HTWvBQ4O+43KlD2Jt7YA5GAkqdX51KQUR3yGj+GvzJH0B6YD//Z">
    <div class="postInfo">
      <h2>Silvestre Herrera</h2>
      <small>Shared privately - Oct 22, 2013</small>
    </div>
    <p>You think water moves fast? You should see ice. It moves like it has a mind. Like it knows it killed the world once and got a taste for murder. After the avalanche, it took us a week to climb out. Now, I don't know exactly when we turned on each other, but I know that seven of us survived the slide... and only five made it out.</p>
    <p>Now we took an oath, that I'm breaking now. We said we'd say it was the snow that killed the other two, but it wasn't. Nature is lethal but it doesn't hold a candle to man.</p>
    <div class="postAttachment">
      <img src="data:image/gif;base64,R0lGODlhAQABAIAAAP///wAAACH5BAEAAAAALAAAAAABAAEAAAICRAEAOw==" data-lazy="http://www.cntraveler.com/readers-choice-awards/caribbean/top-10-islands-caribbean/_jcr_content/par/cn_contentwell/par-main/cn_colctrl/par-col2/cn_slideshow/item0.rendition.slideshowWideHorizontal.bermuda-horseshoe-bay.jpg">
    </div>
    <ul class="comments">
      <li>
        <img alt="User Photo" src="data:image/jpeg;base64,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">
        <div class="content">
          <h2>Gabriela</h2>
          <small>Oct 22, 2013</small>
          <p>Look, just because I don't be givin' no man a foot massage don't make it right for Marsellus to throw Antwone into a glass motherfuckin' house, fuckin' up the way the nigger talks. Motherfucker do that shit to me, he better paralyze my ass, 'cause I'll kill the motherfucker, know what I'm sayin'?</p>
        </div>
      </li>
      <li>
        <img alt="User Photo" src="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAMCAgMCAgMDAwMEAwMEBQgFBQQEBQoHBwYIDAoMDAsVCwsNDh0QDQ4RDgsLEBYQERMUFRUTDA8XGBYUEhIXFRABAwQEAgICCQICCQgCAgIICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICP/AABEIAC4ALgMBEQACEQEDEQH/xAAZAAEAAwEBAAAAAAAAAAAAAAAHBQYIBAP/xAA1EAABAwIFAgQDBQkAAAAAAAABAgMEBREABgcSITFBEyJRYQhCcRUjQ+HxFDJSgZGhscHR/8QAFAEBAAAAAAAAAAAAAAAAAAAAAP/EABQRAQAAAAAAAAAAAAAAAAAAAAD/2gAMAwEAAhEDEQA/AMT6bURMxTQ23vbAaGj5domU8vKq1bfaiRUWF1kblE9AkdzgDWJ8RmVFOKbk0dyMi3lcQoOC/a4tx9f7egWPLuq2TMwSgw6GEsr/ABd4QpPPdJ6/lgJHP2QIJpwm09xuRGWNyVtEEG/uMBmvN9GDMu23v6YBY0IpRmSGbjjjAHPxAZ2VmbOMiO1IfXEhuFCGS8FtoVYIO0Dpe3INyDfkXIAVjL2nsyurCpCJMKK4EpadbZU4NxJHNutykj0v3FsBx13KErKTjS3F3vwAeDfpyD0/5gGTQHUWTNkP5TmrckxZSFGKpah9ytIUs8Wudw468bU+pwERqPBEepFNvmwCnohT1oguBlILxaUEBQuL24wGV59EejZvXT1NbFJl+GWkKKlGyr8FXJNjYf7wGwck5fdyazRH4saHUGlOIR9nmquFD4/e+8QpJ8MpspZ2902IwBpr0hGbaY5mFcJMJ2SgPBxuZcNi1ggNgcEXJ5F+D07APae1aZl3OUZ0Qf2yoRHVIRGTc+flJuR6G/8AMDAJGoklUqahxxssuqsVNkglJtyLjALOh7qVrZR6i3GAFNb8oQdL9TqfJjMSI0eVLMlbchKim3iC+1Z69Vd79++Ad5VXzRUWo79OrqGocaIotMqbR5PKUq5Ke4Juok2GAKdW8+1WPkWBCqC2GqggJYiBgAKQgAW3WFjaxPA6WGArOhWmUuqVI5iTMSim00nxVNEKLjtvKn/JJ9B6ngOvPrm+oqJ/iwF702zbTsnRUT6rNagRUclx5Vr/AEHUn2HOAUx8TWXdXqZVMr5aozFUqDDCXUOVyIlTb6dwS4WWyblSUm/mtz8pAwEBF04q6qapym1RDLLiCFMSGyvYehsb4Cg1nR9+p12Ama19shDhD5d3Ja2lJCrlJukDre/W3XpgJCia0adw6TLyxRG26AliQ4gblbo8og7QpDvfcAD5rHtc9cAd51AelBaCFJUbgg3BGACpcx+c+XZDq3nD8yzf9B7YD1ptUl0eexNgSXYcxhW9p9hZQtB9iOmAYKN8WueaXGDMhNNqiu78mOpDivqW1AH+mArWd9fs4Z6hOwZUxqn051O12HTWvBQ4O+43KlD2Jt7YA5GAkqdX51KQUR3yGj+GvzJH0B6YD//Z">
        <div class="content">
          <h2>Silvestre Herrera</h2>
          <small>Oct 22, 2013</small>
          <p>The path of the righteous man is beset on all sides by the iniquities of the selfish and the tyranny of evil men. Blessed is he who, in the name of charity and good will, shepherds the weak through the valley of darkness, for he is truly his brother's keeper and the finder of lost children. And I will strike down upon thee with great vengeance and furious anger those who would attempt to poison and destroy My brothers. And you will know My name is the Lord when I lay My vengeance upon thee.</p>
        </div>
      </li>
      <li><input type="text" placeholder="Add a comment..."></li>
    </ul>
  </article>
  <article class="post">
    <img alt="User Photo" src="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAMCAgMCAgMDAwMEAwMEBQgFBQQEBQoHBwYIDAoMDAsVCwsNDh0QDQ4RDgsLEBYQERMUFRUTDA8XGBYUEhIXFRABAwQEAgICCQICCQgCAgIICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICP/AABEIAC4ALgMBEQACEQEDEQH/xAAZAAEAAwEBAAAAAAAAAAAAAAAHBQYIBAP/xAA1EAABAwIFAgQDBQkAAAAAAAABAgMEBREABgcSITFBEyJRYQhCcRUjQ+HxFDJSgZGhscHR/8QAFAEBAAAAAAAAAAAAAAAAAAAAAP/EABQRAQAAAAAAAAAAAAAAAAAAAAD/2gAMAwEAAhEDEQA/AMT6bURMxTQ23vbAaGj5domU8vKq1bfaiRUWF1kblE9AkdzgDWJ8RmVFOKbk0dyMi3lcQoOC/a4tx9f7egWPLuq2TMwSgw6GEsr/ABd4QpPPdJ6/lgJHP2QIJpwm09xuRGWNyVtEEG/uMBmvN9GDMu23v6YBY0IpRmSGbjjjAHPxAZ2VmbOMiO1IfXEhuFCGS8FtoVYIO0Dpe3INyDfkXIAVjL2nsyurCpCJMKK4EpadbZU4NxJHNutykj0v3FsBx13KErKTjS3F3vwAeDfpyD0/5gGTQHUWTNkP5TmrckxZSFGKpah9ytIUs8Wudw468bU+pwERqPBEepFNvmwCnohT1oguBlILxaUEBQuL24wGV59EejZvXT1NbFJl+GWkKKlGyr8FXJNjYf7wGwck5fdyazRH4saHUGlOIR9nmquFD4/e+8QpJ8MpspZ2902IwBpr0hGbaY5mFcJMJ2SgPBxuZcNi1ggNgcEXJ5F+D07APae1aZl3OUZ0Qf2yoRHVIRGTc+flJuR6G/8AMDAJGoklUqahxxssuqsVNkglJtyLjALOh7qVrZR6i3GAFNb8oQdL9TqfJjMSI0eVLMlbchKim3iC+1Z69Vd79++Ad5VXzRUWo79OrqGocaIotMqbR5PKUq5Ke4Juok2GAKdW8+1WPkWBCqC2GqggJYiBgAKQgAW3WFjaxPA6WGArOhWmUuqVI5iTMSim00nxVNEKLjtvKn/JJ9B6ngOvPrm+oqJ/iwF702zbTsnRUT6rNagRUclx5Vr/AEHUn2HOAUx8TWXdXqZVMr5aozFUqDDCXUOVyIlTb6dwS4WWyblSUm/mtz8pAwEBF04q6qapym1RDLLiCFMSGyvYehsb4Cg1nR9+p12Ama19shDhD5d3Ja2lJCrlJukDre/W3XpgJCia0adw6TLyxRG26AliQ4gblbo8og7QpDvfcAD5rHtc9cAd51AelBaCFJUbgg3BGACpcx+c+XZDq3nD8yzf9B7YD1ptUl0eexNgSXYcxhW9p9hZQtB9iOmAYKN8WueaXGDMhNNqiu78mOpDivqW1AH+mArWd9fs4Z6hOwZUxqn051O12HTWvBQ4O+43KlD2Jt7YA5GAkqdX51KQUR3yGj+GvzJH0B6YD//Z">
    <div class="postInfo">
      <h2>Silvestre Herrera</h2>
      <small>Shared privately - Oct 22, 2013</small>
    </div>
    <p>You think water moves fast? You should see ice. It moves like it has a mind. Like it knows it killed the world once and got a taste for murder. After the avalanche, it took us a week to climb out. Now, I don't know exactly when we turned on each other, but I know that seven of us survived the slide... and only five made it out.</p>
    <p>Now we took an oath, that I'm breaking now. We said we'd say it was the snow that killed the other two, but it wasn't. Nature is lethal but it doesn't hold a candle to man.</p>
    <div class="postAttachment">
      <img src="data:image/gif;base64,R0lGODlhAQABAIAAAP///wAAACH5BAEAAAAALAAAAAABAAEAAAICRAEAOw==" data-lazy="http://travel-prize.com/blog/wp-content/uploads/2010/07/caribbean.jpg">
    </div>
    <ul class="comments">
      <li>
        <img alt="User Photo" src="data:image/jpeg;base64,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">
        <div class="content">
          <h2>Gabriela</h2>
          <small>Oct 22, 2013</small>
          <p>Look, just because I don't be givin' no man a foot massage don't make it right for Marsellus to throw Antwone into a glass motherfuckin' house, fuckin' up the way the nigger talks. Motherfucker do that shit to me, he better paralyze my ass, 'cause I'll kill the motherfucker, know what I'm sayin'?</p>
        </div>
      </li>
      <li>
        <img alt="User Photo" src="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAMCAgMCAgMDAwMEAwMEBQgFBQQEBQoHBwYIDAoMDAsVCwsNDh0QDQ4RDgsLEBYQERMUFRUTDA8XGBYUEhIXFRABAwQEAgICCQICCQgCAgIICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICP/AABEIAC4ALgMBEQACEQEDEQH/xAAZAAEAAwEBAAAAAAAAAAAAAAAHBQYIBAP/xAA1EAABAwIFAgQDBQkAAAAAAAABAgMEBREABgcSITFBEyJRYQhCcRUjQ+HxFDJSgZGhscHR/8QAFAEBAAAAAAAAAAAAAAAAAAAAAP/EABQRAQAAAAAAAAAAAAAAAAAAAAD/2gAMAwEAAhEDEQA/AMT6bURMxTQ23vbAaGj5domU8vKq1bfaiRUWF1kblE9AkdzgDWJ8RmVFOKbk0dyMi3lcQoOC/a4tx9f7egWPLuq2TMwSgw6GEsr/ABd4QpPPdJ6/lgJHP2QIJpwm09xuRGWNyVtEEG/uMBmvN9GDMu23v6YBY0IpRmSGbjjjAHPxAZ2VmbOMiO1IfXEhuFCGS8FtoVYIO0Dpe3INyDfkXIAVjL2nsyurCpCJMKK4EpadbZU4NxJHNutykj0v3FsBx13KErKTjS3F3vwAeDfpyD0/5gGTQHUWTNkP5TmrckxZSFGKpah9ytIUs8Wudw468bU+pwERqPBEepFNvmwCnohT1oguBlILxaUEBQuL24wGV59EejZvXT1NbFJl+GWkKKlGyr8FXJNjYf7wGwck5fdyazRH4saHUGlOIR9nmquFD4/e+8QpJ8MpspZ2902IwBpr0hGbaY5mFcJMJ2SgPBxuZcNi1ggNgcEXJ5F+D07APae1aZl3OUZ0Qf2yoRHVIRGTc+flJuR6G/8AMDAJGoklUqahxxssuqsVNkglJtyLjALOh7qVrZR6i3GAFNb8oQdL9TqfJjMSI0eVLMlbchKim3iC+1Z69Vd79++Ad5VXzRUWo79OrqGocaIotMqbR5PKUq5Ke4Juok2GAKdW8+1WPkWBCqC2GqggJYiBgAKQgAW3WFjaxPA6WGArOhWmUuqVI5iTMSim00nxVNEKLjtvKn/JJ9B6ngOvPrm+oqJ/iwF702zbTsnRUT6rNagRUclx5Vr/AEHUn2HOAUx8TWXdXqZVMr5aozFUqDDCXUOVyIlTb6dwS4WWyblSUm/mtz8pAwEBF04q6qapym1RDLLiCFMSGyvYehsb4Cg1nR9+p12Ama19shDhD5d3Ja2lJCrlJukDre/W3XpgJCia0adw6TLyxRG26AliQ4gblbo8og7QpDvfcAD5rHtc9cAd51AelBaCFJUbgg3BGACpcx+c+XZDq3nD8yzf9B7YD1ptUl0eexNgSXYcxhW9p9hZQtB9iOmAYKN8WueaXGDMhNNqiu78mOpDivqW1AH+mArWd9fs4Z6hOwZUxqn051O12HTWvBQ4O+43KlD2Jt7YA5GAkqdX51KQUR3yGj+GvzJH0B6YD//Z">
        <div class="content">
          <h2>Silvestre Herrera</h2>
          <small>Oct 22, 2013</small>
          <p>The path of the righteous man is beset on all sides by the iniquities of the selfish and the tyranny of evil men. Blessed is he who, in the name of charity and good will, shepherds the weak through the valley of darkness, for he is truly his brother's keeper and the finder of lost children. And I will strike down upon thee with great vengeance and furious anger those who would attempt to poison and destroy My brothers. And you will know My name is the Lord when I lay My vengeance upon thee.</p>
        </div>
      </li>
      <li><input type="text" placeholder="Add a comment..."></li>
    </ul>
  </article>
  <article class="post">
    <img alt="User Photo" src="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAMCAgMCAgMDAwMEAwMEBQgFBQQEBQoHBwYIDAoMDAsVCwsNDh0QDQ4RDgsLEBYQERMUFRUTDA8XGBYUEhIXFRABAwQEAgICCQICCQgCAgIICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICP/AABEIAC4ALgMBEQACEQEDEQH/xAAZAAEAAwEBAAAAAAAAAAAAAAAHBQYIBAP/xAA1EAABAwIFAgQDBQkAAAAAAAABAgMEBREABgcSITFBEyJRYQhCcRUjQ+HxFDJSgZGhscHR/8QAFAEBAAAAAAAAAAAAAAAAAAAAAP/EABQRAQAAAAAAAAAAAAAAAAAAAAD/2gAMAwEAAhEDEQA/AMT6bURMxTQ23vbAaGj5domU8vKq1bfaiRUWF1kblE9AkdzgDWJ8RmVFOKbk0dyMi3lcQoOC/a4tx9f7egWPLuq2TMwSgw6GEsr/ABd4QpPPdJ6/lgJHP2QIJpwm09xuRGWNyVtEEG/uMBmvN9GDMu23v6YBY0IpRmSGbjjjAHPxAZ2VmbOMiO1IfXEhuFCGS8FtoVYIO0Dpe3INyDfkXIAVjL2nsyurCpCJMKK4EpadbZU4NxJHNutykj0v3FsBx13KErKTjS3F3vwAeDfpyD0/5gGTQHUWTNkP5TmrckxZSFGKpah9ytIUs8Wudw468bU+pwERqPBEepFNvmwCnohT1oguBlILxaUEBQuL24wGV59EejZvXT1NbFJl+GWkKKlGyr8FXJNjYf7wGwck5fdyazRH4saHUGlOIR9nmquFD4/e+8QpJ8MpspZ2902IwBpr0hGbaY5mFcJMJ2SgPBxuZcNi1ggNgcEXJ5F+D07APae1aZl3OUZ0Qf2yoRHVIRGTc+flJuR6G/8AMDAJGoklUqahxxssuqsVNkglJtyLjALOh7qVrZR6i3GAFNb8oQdL9TqfJjMSI0eVLMlbchKim3iC+1Z69Vd79++Ad5VXzRUWo79OrqGocaIotMqbR5PKUq5Ke4Juok2GAKdW8+1WPkWBCqC2GqggJYiBgAKQgAW3WFjaxPA6WGArOhWmUuqVI5iTMSim00nxVNEKLjtvKn/JJ9B6ngOvPrm+oqJ/iwF702zbTsnRUT6rNagRUclx5Vr/AEHUn2HOAUx8TWXdXqZVMr5aozFUqDDCXUOVyIlTb6dwS4WWyblSUm/mtz8pAwEBF04q6qapym1RDLLiCFMSGyvYehsb4Cg1nR9+p12Ama19shDhD5d3Ja2lJCrlJukDre/W3XpgJCia0adw6TLyxRG26AliQ4gblbo8og7QpDvfcAD5rHtc9cAd51AelBaCFJUbgg3BGACpcx+c+XZDq3nD8yzf9B7YD1ptUl0eexNgSXYcxhW9p9hZQtB9iOmAYKN8WueaXGDMhNNqiu78mOpDivqW1AH+mArWd9fs4Z6hOwZUxqn051O12HTWvBQ4O+43KlD2Jt7YA5GAkqdX51KQUR3yGj+GvzJH0B6YD//Z">
    <div class="postInfo">
      <h2>Silvestre Herrera</h2>
      <small>Shared privately - Oct 22, 2013</small>
    </div>
    <p>You think water moves fast? You should see ice. It moves like it has a mind. Like it knows it killed the world once and got a taste for murder. After the avalanche, it took us a week to climb out. Now, I don't know exactly when we turned on each other, but I know that seven of us survived the slide... and only five made it out.</p>
    <p>Now we took an oath, that I'm breaking now. We said we'd say it was the snow that killed the other two, but it wasn't. Nature is lethal but it doesn't hold a candle to man.</p>
    <div class="postAttachment">
      <img src="data:image/gif;base64,R0lGODlhAQABAIAAAP///wAAACH5BAEAAAAALAAAAAABAAEAAAICRAEAOw==" data-lazy="http://www.safety4sea.com/images/media/test/Caribbean-Sea.jpg">
    </div>
    <ul class="comments">
      <li>
        <img alt="User Photo" src="data:image/jpeg;base64,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">
        <div class="content">
          <h2>Gabriela</h2>
          <small>Oct 22, 2013</small>
          <p>Look, just because I don't be givin' no man a foot massage don't make it right for Marsellus to throw Antwone into a glass motherfuckin' house, fuckin' up the way the nigger talks. Motherfucker do that shit to me, he better paralyze my ass, 'cause I'll kill the motherfucker, know what I'm sayin'?</p>
        </div>
      </li>
      <li>
        <img alt="User Photo" src="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAMCAgMCAgMDAwMEAwMEBQgFBQQEBQoHBwYIDAoMDAsVCwsNDh0QDQ4RDgsLEBYQERMUFRUTDA8XGBYUEhIXFRABAwQEAgICCQICCQgCAgIICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICP/AABEIAC4ALgMBEQACEQEDEQH/xAAZAAEAAwEBAAAAAAAAAAAAAAAHBQYIBAP/xAA1EAABAwIFAgQDBQkAAAAAAAABAgMEBREABgcSITFBEyJRYQhCcRUjQ+HxFDJSgZGhscHR/8QAFAEBAAAAAAAAAAAAAAAAAAAAAP/EABQRAQAAAAAAAAAAAAAAAAAAAAD/2gAMAwEAAhEDEQA/AMT6bURMxTQ23vbAaGj5domU8vKq1bfaiRUWF1kblE9AkdzgDWJ8RmVFOKbk0dyMi3lcQoOC/a4tx9f7egWPLuq2TMwSgw6GEsr/ABd4QpPPdJ6/lgJHP2QIJpwm09xuRGWNyVtEEG/uMBmvN9GDMu23v6YBY0IpRmSGbjjjAHPxAZ2VmbOMiO1IfXEhuFCGS8FtoVYIO0Dpe3INyDfkXIAVjL2nsyurCpCJMKK4EpadbZU4NxJHNutykj0v3FsBx13KErKTjS3F3vwAeDfpyD0/5gGTQHUWTNkP5TmrckxZSFGKpah9ytIUs8Wudw468bU+pwERqPBEepFNvmwCnohT1oguBlILxaUEBQuL24wGV59EejZvXT1NbFJl+GWkKKlGyr8FXJNjYf7wGwck5fdyazRH4saHUGlOIR9nmquFD4/e+8QpJ8MpspZ2902IwBpr0hGbaY5mFcJMJ2SgPBxuZcNi1ggNgcEXJ5F+D07APae1aZl3OUZ0Qf2yoRHVIRGTc+flJuR6G/8AMDAJGoklUqahxxssuqsVNkglJtyLjALOh7qVrZR6i3GAFNb8oQdL9TqfJjMSI0eVLMlbchKim3iC+1Z69Vd79++Ad5VXzRUWo79OrqGocaIotMqbR5PKUq5Ke4Juok2GAKdW8+1WPkWBCqC2GqggJYiBgAKQgAW3WFjaxPA6WGArOhWmUuqVI5iTMSim00nxVNEKLjtvKn/JJ9B6ngOvPrm+oqJ/iwF702zbTsnRUT6rNagRUclx5Vr/AEHUn2HOAUx8TWXdXqZVMr5aozFUqDDCXUOVyIlTb6dwS4WWyblSUm/mtz8pAwEBF04q6qapym1RDLLiCFMSGyvYehsb4Cg1nR9+p12Ama19shDhD5d3Ja2lJCrlJukDre/W3XpgJCia0adw6TLyxRG26AliQ4gblbo8og7QpDvfcAD5rHtc9cAd51AelBaCFJUbgg3BGACpcx+c+XZDq3nD8yzf9B7YD1ptUl0eexNgSXYcxhW9p9hZQtB9iOmAYKN8WueaXGDMhNNqiu78mOpDivqW1AH+mArWd9fs4Z6hOwZUxqn051O12HTWvBQ4O+43KlD2Jt7YA5GAkqdX51KQUR3yGj+GvzJH0B6YD//Z">
        <div class="content">
          <h2>Silvestre Herrera</h2>
          <small>Oct 22, 2013</small>
          <p>The path of the righteous man is beset on all sides by the iniquities of the selfish and the tyranny of evil men. Blessed is he who, in the name of charity and good will, shepherds the weak through the valley of darkness, for he is truly his brother's keeper and the finder of lost children. And I will strike down upon thee with great vengeance and furious anger those who would attempt to poison and destroy My brothers. And you will know My name is the Lord when I lay My vengeance upon thee.</p>
        </div>
      </li>
      <li><input type="text" placeholder="Add a comment..."></li>
    </ul>
  </article>
  <footer><p>Thanks for trying onScreen</p></footer>
</section>

<script type="text/javascript">
  
  function lazyLoad() {
    /* 
    To use the lazy loader, you must initialize onScreen and tell it 
    which HTML attribute to look for.
    onScreen will then replace the SRC value with the one from lazyAttr.
    */
    $('div.postAttachment img').onScreen({
      lazyAttr: 'data-lazy'
    });
  }
  
  function animatePosts() { 
    /*
    In this example I used onScreen to animate the posts as
    they become visible. I set the tolerance to 50 so the posts
    start animating once they're 50px inside the viewport.
    */
    $('article.post').onScreen({
      doIn: function() {
        $(this).animate({
          top: 0,
          opacity: 1
        },500);
      },
      tolerance: 50
    });
  }
  
  $(function(){
  
    animatePosts()
    lazyLoad();
    
  });
</script>