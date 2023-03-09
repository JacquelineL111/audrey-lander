
<script>
{/* function volumeToggle() {
    gtag("event", "click", {
        "event_category": "innbeautylab",
        "event_label": "Volume Toggle"
    })
} */}

{/* onlick="openCollection()" */}
function openCollection() {
    gtag("event", "card_click", {
        "event_category": "innbeautylab",
        "event_label": "Shop Best Sellers"
    })
}

{/* onlick="shopNowCollection()" */}
function shopNowCollection(p) {
    gtag("event", "shop_now", {
        "event_category": "innbeautylab",
        "event_label": p
    })
}

{/* onlick="openFaceGlaze()" */}
function openFaceGlaze() {
    gtag("event", "card_click", {
        "event_category": "innbeautylab",
        "event_label": "Face Glaze"
    })
}
   
{/* onlick="openGlazedDewy()" */}  
function openGlazedDewy() {
    gtag("event", "card_click", {
        "event_category": "innbeautylab",
        "event_label": "Glazed and Dewy"
    })
}
   
{/* onlick="addFaceGlaze()" */}
function addFaceGlaze() {
    gtag("event", "add_to_bag", {
        "event_category": "innbeautylab",
        "event_label": "Face Glaze"
    })
}

{/* onlick="addGlazedDewy()" */}
function addGlazedDewy() {
    gtag("event", "add_to_bag", {
        "event_category": "innbeautylab",
        "event_label": "Glazed and Dewy"
    })
}

{/* onlick="buyFaceGlaze()" */}    
function buyFaceGlaze() {
    gtag("event", "buy_now", {
        "event_category": "innbeautylab",
        "event_label": "Face Glaze"
    })
}

{/* onlick="buyGlazedDewy()" */}    
function buyGlazedDewy() {
    gtag("event", "buy_now", {
        "event_category": "innbeautylab",
        "event_label": "Glazed and Dewy"
    })
}

</script>        