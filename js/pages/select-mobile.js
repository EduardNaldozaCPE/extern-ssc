function mobileUI() {
    let title = document.getElementById("title");
    title.style.fontSize = "1.1rem";
    title.style.left = "50%";
    title.style.top = "6%";
    title.style.transform = "translateX(-50%)";

    let logo = document.getElementById("logo-white");
    logo.style.left = "50%"
    logo.style.transform = "translateX(-50%)"
    logo.style.width = "18%";
    
    let disclaimer = document.getElementById("contact");
    disclaimer.style.top = "91%";
    disclaimer.style.width = "92%";

    document.getElementById("content").innerHTML +=`
    <div id="mobile-panel">
        <div id="mobile-panel-filter">
            <a onclick="filterBtn(this)" class="mobile-filter-btn">A</a>
            <a onclick="filterBtn(this)" class="mobile-filter-btn">B</a>
            <a onclick="filterBtn(this)" class="mobile-filter-btn">C</a>
            <a onclick="filterBtn(this)" class="mobile-filter-btn">D</a>
            <a onclick="filterBtn(this)" class="mobile-filter-btn">E</a>
            <a onclick="filterBtn(this)" class="mobile-filter-btn">F</a>
            <a onclick="filterBtn(this)" class="mobile-filter-btn">G</a>
            <a onclick="filterBtn(this)" class="mobile-filter-btn">H</a>
            <a onclick="filterBtn(this)" class="mobile-filter-btn">I</a>
            <a onclick="filterBtn(this)" class="mobile-filter-btn">J</a>
            <a onclick="filterBtn(this)" class="mobile-filter-btn">K</a>
            <a onclick="filterBtn(this)" class="mobile-filter-btn">L</a>
            <a onclick="filterBtn(this)" class="mobile-filter-btn">M</a>
            <br>
            <a onclick="filterBtn(this)" class="mobile-filter-btn">N</a>
            <a onclick="filterBtn(this)" class="mobile-filter-btn">O</a>
            <a onclick="filterBtn(this)" class="mobile-filter-btn">P</a>
            <a onclick="filterBtn(this)" class="mobile-filter-btn">Q</a>
            <a onclick="filterBtn(this)" class="mobile-filter-btn">R</a>
            <a onclick="filterBtn(this)" class="mobile-filter-btn">S</a>
            <a onclick="filterBtn(this)" class="mobile-filter-btn">T</a>
            <a onclick="filterBtn(this)" class="mobile-filter-btn">U</a>
            <a onclick="filterBtn(this)" class="mobile-filter-btn">V</a>
            <a onclick="filterBtn(this)" class="mobile-filter-btn">W</a>
            <a onclick="filterBtn(this)" class="mobile-filter-btn">X</a>
            <a onclick="filterBtn(this)" class="mobile-filter-btn">Y</a>
            <a onclick="filterBtn(this)" class="mobile-filter-btn">Z</a>
            <br>
            <input type="button" value="CLEAR" id="mobile-clear-btn" onclick="clearBtn()"></input>
        </div>
        <div id="mobile-panel-scroll">
            <button class="mobile-panel-btn" onclick="serviceBtn(this)">Adolescent Medicine</button>
            <button class="mobile-panel-btn" onclick="serviceBtn(this)">Adult Mental Health</button>
            <button class="mobile-panel-btn" onclick="serviceBtn(this)">Adult Services</button>
            <button class="mobile-panel-btn" onclick="serviceBtn(this)">Aesthetics</button>
            <button class="mobile-panel-btn" onclick="serviceBtn(this)">Allergy Immunology</button>
            <button class="mobile-panel-btn" onclick="serviceBtn(this)">Ancillary Services</button>
            <button class="mobile-panel-btn" onclick="serviceBtn(this)">CAMHS</button>
            <button class="mobile-panel-btn" onclick="serviceBtn(this)">Cardiology</button>
            <button class="mobile-panel-btn" onclick="serviceBtn(this)">Dental Surgery</button>
            <button class="mobile-panel-btn" onclick="serviceBtn(this)">Dermatology</button>
            <button class="mobile-panel-btn" onclick="serviceBtn(this)">Developmental Pediatrics</button>
            <button class="mobile-panel-btn" onclick="serviceBtn(this)">ENT</button>
            <button class="mobile-panel-btn" onclick="serviceBtn(this)">Emergency Services</button>
            <button class="mobile-panel-btn" onclick="serviceBtn(this)">Endocrinology</button>
            <button class="mobile-panel-btn" onclick="serviceBtn(this)">Gastroenterology</button>
            <button class="mobile-panel-btn" onclick="serviceBtn(this)">General Pediatrics</button>
            <button class="mobile-panel-btn" onclick="serviceBtn(this)">General Surgery</button>
            <button class="mobile-panel-btn" onclick="serviceBtn(this)">Genetics</button>
            <button class="mobile-panel-btn" onclick="serviceBtn(this)">Gynecology</button>
            <button class="mobile-panel-btn" onclick="serviceBtn(this)">Hematology/Oncology</button>
            <button class="mobile-panel-btn" onclick="serviceBtn(this)">Infectious Disease</button>
            <button class="mobile-panel-btn" onclick="serviceBtn(this)">Inpatient & Ambulatory Surgery Procedures</button>
            <button class="mobile-panel-btn" onclick="serviceBtn(this)">Maternal Fetal Medicine</button>
            <button class="mobile-panel-btn" onclick="serviceBtn(this)">NICU</button>
            <button class="mobile-panel-btn" onclick="serviceBtn(this)">Neonatal Surgery</button>
            <button class="mobile-panel-btn" onclick="serviceBtn(this)">Nephrology</button>
            <button class="mobile-panel-btn" onclick="serviceBtn(this)">Neurology</button>
            <button class="mobile-panel-btn" onclick="serviceBtn(this)">Neurosurgery</button>
            <button class="mobile-panel-btn" onclick="serviceBtn(this)">Obstetrics</button>
            <button class="mobile-panel-btn" onclick="serviceBtn(this)">Ophthalmology</button>
            <button class="mobile-panel-btn" onclick="serviceBtn(this)">Plastic Surgery</button>
            <button class="mobile-panel-btn" onclick="serviceBtn(this)">Rehab Medicine</button>
            <button class="mobile-panel-btn" onclick="serviceBtn(this)">Reproductive Medicine</button>
            <button class="mobile-panel-btn" onclick="serviceBtn(this)">Rheumatology</button>
            <button class="mobile-panel-btn" onclick="serviceBtn(this)">Transplant</button>
            <button class="mobile-panel-btn" onclick="serviceBtn(this)">Urology</button>
            <div style="height: 5px;"></div>
        </div>
    </div>
        `
}