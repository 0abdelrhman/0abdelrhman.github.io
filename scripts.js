document.addEventListener("DOMContentLoaded", function() {
    const searchInput = document.getElementById("search");
    const pdfListContainer = document.querySelector("#pdf ul");
    const murtalListContainer = document.querySelector("#murtal ul");
    const mujawwadListContainer = document.querySelector("#mujawwad ul");

    const surahs = [
        { name: 'الفاتحة', number: '001' },
        { name: 'البقرة', number: '002' },
        { name: 'آل عمران', number: '003' },
        { name: 'النساء', number: '004' },
        { name: 'المائدة', number: '005' },
        { name: 'الأنعام', number: '006' },
        { name: 'الأعراف', number: '007' },
        { name: 'الأنفال', number: '008' },
        { name: 'التوبة', number: '009' },
        { name: 'يونس', number: '010' },
        { name: 'هود', number: '011' },
        { name: 'يوسف', number: '012' },
        { name: 'الرعد', number: '013' },
        { name: 'إبراهيم', number: '014' },
        { name: 'الحجر', number: '015' },
        { name: 'النحل', number: '016' },
        { name: 'الإسراء', number: '017' },
        { name: 'الكهف', number: '018' },
        { name: 'مريم', number: '019' },
        { name: 'طه', number: '020' },
        { name: 'الأنبياء', number: '021' },
        { name: 'الحج', number: '022' },
        { name: 'المؤمنون', number: '023' },
        { name: 'النور', number: '024' },
        { name: 'الفرقان', number: '025' },
        { name: 'الشعراء', number: '026' },
        { name: 'النمل', number: '027' },
        { name: 'القصص', number: '028' },
        { name: 'العنكبوت', number: '029' },
        { name: 'الروم', number: '030' },
        { name: 'لقمان', number: '031' },
        { name: 'السجدة', number: '032' },
        { name: 'الأحزاب', number: '033' },
        { name: 'سبأ', number: '034' },
        { name: 'فاطر', number: '035' },
        { name: 'يس', number: '036' },
        { name: 'الصافات', number: '037' },
        { name: 'ص', number: '038' },
        { name: 'الزمر', number: '039' },
        { name: 'غافر', number: '040' },
        { name: 'فصلت', number: '041' },
        { name: 'الشورى', number: '042' },
        { name: 'الزخرف', number: '043' },
        { name: 'الدخان', number: '044' },
        { name: 'الجاثية', number: '045' },
        { name: 'الأحقاف', number: '046' },
        { name: 'محمد', number: '047' },
        { name: 'الفتح', number: '048' },
        { name: 'الحجرات', number: '049' },
        { name: 'ق', number: '050' },
        { name: 'الذاريات', number: '051' },
        { name: 'الطور', number: '052' },
        { name: 'النجم', number: '053' },
        { name: 'القمر', number: '054' },
        { name: 'الرحمن', number: '055' },
        { name: 'الواقعة', number: '056' },
        { name: 'الحديد', number: '057' },
        { name: 'المجادلة', number: '058' },
        { name: 'الحشر', number: '059' },
        { name: 'الممتحنة', number: '060' },
        { name: 'الصف', number: '061' },
        { name: 'الجمعة', number: '062' },
        { name: 'المنافقون', number: '063' },
        { name: 'التغابن', number: '064' },
        { name: 'الطلاق', number: '065' },
        { name: 'التحريم', number: '066' },
        { name: 'الملك', number: '067' },
        { name: 'القلم', number: '068' },
        { name: 'الحاقة', number: '069' },
        { name: 'المعارج', number: '070' },
        { name: 'نوح', number: '071' },
        { name: 'الجن', number: '072' },
        { name: 'المزمل', number: '073' },
        { name: 'المدثر', number: '074' },
        { name: 'القيامة', number: '075' },
        { name: 'الإنسان', number: '076' },
        { name: 'المرسلات', number: '077' },
        { name: 'النبأ', number: '078' },
        { name: 'النازعات', number: '079' },
        { name: 'عبس', number: '080' },
        { name: 'التكوير', number: '081' },
        { name: 'الإنفطار', number: '082' },
        { name: 'المطففين', number: '083' },
        { name: 'الانشقاق', number: '084' },
        { name: 'البروج', number: '085' },
        { name: 'الطارق', number: '086' },
        { name: 'الأعلى', number: '087' },
        { name: 'الغاشية', number: '088' },
        { name: 'الفجر', number: '089' },
        { name: 'البلد', number: '090' },
        { name: 'الشمس', number: '091' },
        { name: 'الليل', number: '092' },
        { name: 'الضحى', number: '093' },
        { name: 'الشرح', number: '094' },
        { name: 'التين', number: '095' },
        { name: 'العلق', number: '096' },
        { name: 'القدر', number: '097' },
        { name: 'البينة', number: '098' },
        { name: 'الزلزلة', number: '099' },
        { name: 'العاديات', number: '100' },
        { name: 'القارعة', number: '101' },
        { name: 'التكاثر', number: '102' },
        { name: 'العصر', number: '103' },
        { name: 'الهداية', number: '104' },
        { name: 'الناس', number: '105' }
    ];

    function generateSurahList(type) {
        const container = type === 'pdf' ? pdfListContainer : (type === 'murtal' ? murtalListContainer : mujawwadListContainer);
        container.innerHTML = '';

        surahs.forEach(surah => {
            const li = document.createElement('li');
            const link = document.createElement('a');
            link.href = type === 'pdf' ? `assets/pdfs/${surah.number}.pdf` : `assets/audio/${type}/${surah.number}.mp3`;
            link.textContent = surah.name;
            link.target = '_blank';
            li.appendChild(link);
            container.appendChild(li);
        });
    }

    searchInput.addEventListener("input", function() {
        const query = searchInput.value.toLowerCase();
        
        const sections = document.querySelectorAll("section ul li");
        sections.forEach(item => {
            const text = item.textContent.toLowerCase();
            if (text.includes(query)) {
                item.style.display = "block";
            } else {
                item.style.display = "none";
            }
        });
    });

    generateSurahList('pdf');
    generateSurahList('murtal');
    generateSurahList('mujawwad');
});
