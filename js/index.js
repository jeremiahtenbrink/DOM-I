const siteContent = {
    "nav": {
        "nav-item-1": "Services",
        "nav-item-2": "Product",
        "nav-item-3": "Vision",
        "nav-item-4": "Features",
        "nav-item-5": "About",
        "nav-item-6": "Contact",
        "img-src": "img/logo.png"
    },
    "cta": {
        "h1": "DOM Is Awesome",
        "button": "Get Started",
        "img-src": "img/header-img.png"
    },
    "main-content": {
        "features-h4": "Features",
        "features-content": "Features content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
        "about-h4": "About",
        "about-content": "About content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
        "middle-img-src": "img/mid-page-accent.jpg",
        "services-h4": "Services",
        "services-content": "Services content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
        "product-h4": "Product",
        "product-content": "Product content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
        "vision-h4": "Vision",
        "vision-content": "Vision content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    },
    "contact": {
        "contact-h4": "Contact",
        "address": "123 Way 456 Street Somewhere, USA",
        "phone": "1 (888) 888-8888",
        "email": "sales@greatidea.io",
    },
    "footer": {
        "copyright": "Copyright Great Idea! 2018"
    },
};

// Example: Update the img src for the logo
let logo = document.getElementById( "logo-img" );
logo.setAttribute( 'src', siteContent[ "nav" ][ "img-src" ] );

let nav = document.getElementsByTagName( "nav" );
let navA = nav[ 0 ].childNodes;

for( let i = 0; i < 6; i++ ) {
    navA[ ( i * 2 + 1 ) ].innerHTML = siteContent[ "nav" ][ "nav-item-" + ( i + 1 ) ];
    navA[(i * 2 + 1)].style.color = "green";
}

let cta = document.querySelector( ".cta" );
let childNode = cta.childNodes[ 0 ];
while( childNode ) {
    childNode = checkChildNode( childNode );
}

childNode = cta.nextElementSibling;
while( childNode ) {
    childNode = checkChildNode( childNode );
}
let link = document.createElement("a");
link.textContent = "New Link";
nav[0].appendChild(link);
link = document.createElement("a");
link.innerText = "Another Link";
nav[0].prepend(link);

function checkChildNode( child ) {
    if( child.nodeName === "DIV" ) {
        if( child.classList.contains( "cta-text" ) ) {
            let grandChild = child.childNodes[ 0 ].nextElementSibling;
            while( grandChild ) {
                grandChild = CTATextElement( grandChild );
            }
        }
    }
    if( child.id === "cta-img" ) {
        child.src = siteContent.cta[ "img-src" ];
    }
    if( child.nodeName === "SECTION" ) {
        if( child.classList.contains( "main-content" ) ) {
            let grandchild = child.childNodes[ 0 ].nextElementSibling;
            while( grandchild ) {
                grandchild = mainContent( grandchild );
            }
        }
        if( child.classList.contains( "contact" ) ) {
            
            contact( child );
            return child.nextElementSibling;
        }
    }
    
    if( child.nodeName === "FOOTER" ) {
        
        child.childNodes[ 1 ].textContent = siteContent.footer.copyright;
    }
    return child.nextElementSibling;
}

function contact( child ) {
    
    child.childNodes[ 1 ].textContent = siteContent.contact[ "contact-h4" ];
    child.childNodes[ 3 ].textContent = siteContent.contact.address;
    child.childNodes[ 5 ].textContent = siteContent.contact.phone;
    child.childNodes[ 7 ].textContent = siteContent.contact.email;
}

function mainContent( child ) {
    
    if( child.nodeName === "DIV" ) {
        if( child.classList.contains( "top-content" ) ) {
            let grandChild = child.childNodes[ 0 ].nextElementSibling;
            topContent( grandChild );
            return child.nextElementSibling;
        }
        if( child.classList.contains( "bottom-content" ) ) {
            let grandChild = child.childNodes[ 0 ].nextElementSibling;
            bottomContent( grandChild );
            return child.nextElementSibling;
        }
    }
    if( child.nodeName === "IMG" && child.classList.contains( "middle-img" ) ) {
        child.src = siteContent[ "main-content" ][ "middle-img-src" ];
        return child.nextElementSibling;
    }
}

function bottomContent( child ) {
    if( child.nodeName === "DIV" && child.classList.contains( "text-content" ) ) {
        child.childNodes[ 1 ].textContent = siteContent[ "main-content" ][ "services-h4" ];
        child.childNodes[ 3 ].textContent = siteContent[ "main-content" ][ "services-content" ];
        child = child.nextElementSibling;
        child.childNodes[ 1 ].textContent = siteContent[ "main-content" ][ "product-h4" ];
        child.childNodes[ 3 ].textContent = siteContent[ "main-content" ][ "product-content" ];
        child = child.nextElementSibling;
        child.childNodes[ 1 ].textContent = siteContent[ "main-content" ][ "vision-h4" ];
        child.childNodes[ 3 ].textContent = siteContent[ "main-content" ][ "vision-content" ];
    }
}

function topContent( child ) {
    if( child.nodeName === "DIV" && child.classList.contains( "text-content" ) ) {
        child.childNodes[ 1 ].textContent = siteContent[ "main-content" ][ "features-h4" ];
        child.childNodes[ 3 ].textContent = siteContent[ "main-content" ][ "features-content" ];
        child = child.nextElementSibling;
        child.childNodes[ 1 ].textContent = siteContent[ "main-content" ][ "about-h4" ];
        child.childNodes[ 3 ].textContent = siteContent[ "main-content" ][ "about-content" ];
    }
}

function CTATextElement( child ) {
    if( child.nodeName === "H1" ) {
        let array = siteContent.cta.h1.split(" ");
        child.innerHTML = array[0] + '<br/>' + array[1] + "<br/>" + array[2];
        return child.nextElementSibling;
    }
    if( child.nodeName === "BUTTON" ) {
        child.textContent = siteContent.cta.button;
        return child.nextElementSibling;
    }
}
