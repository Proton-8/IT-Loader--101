import React from "react";
import "./Background.css"
import "./Style.css"
export const Navbar = () => {
  return (
   <div>
 <div class="container">
        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navb" aria-controls="navb" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
        </button>
        <a class="navbar-brand js-scroll-trigger" href="/"><img src="https://www.iceturtlestudios.com/wp-content/uploads/2022/07/logo512x512-e1656703794928.png" class="site-logo"
                alt="site-logo"/></a>
        <div class="navbar-collapse collapse justify-content-end" id="navb">
            <ul class="navbar-nav ml-auto text-uppercase">
                <li class="nav-item"><a class="nav-link text-decoration-none" href="/blog/">Blog</a></li>
                <li class="nav-item"><a class="nav-link text-decoration-none dropdown-toggle" href="#" data-bs-toggle="dropdown">Drowdown</a>
                    <ul role="menu" class="dropdown-menu">
                        <li class="nav-item-child"><a class="nav-link-child" href="./category/2-player">2 Player</a>
                        </li>
                        <li class="nav-item-child"><a class="nav-link-child" href="./category/3d">3D</a></li>
                        <li class="nav-item-child"><a class="nav-link-child" href="./category/action">Action</a>
                        </li>
                        <li class="nav-item-child"><a class="nav-link-child"
                                href="./category/adventure">Adventure</a></li>
                    </ul>
                </li>
                <li class="nav-item"><a class="nav-link text-decoration-none" href="./page/sample-page">Sample Page</a></li>
                <li class="nav-item">
                    <a class="nav-link text-decoration-none" href="./login/">test Login</a>
                </li>
            </ul>
            <form class="form-inline my-2 my-lg-0 search-bar" action="/index.php">
                <div class="input-group">
                    <input type="hidden" name="viewpage" value="search" />
                    <input type="text" class="form-control rounded-left search" placeholder="Search game"
                        name="slug" minlength="2" required />
                    <div class="input-group-append">
                        <button type="submit" class="btn btn-secondary" 
                        // type="button"
                        >
                            <i class="fa fa-search"></i>
                        </button>
                    </div>
                </div>
            </form>
        </div>
    </div>


</div>

  );
};
