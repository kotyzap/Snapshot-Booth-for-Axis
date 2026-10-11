/* Snapshot Booth landing page translations.
   English text in index.html is the source and the key. Each entry: English -> [cs, de, es, fr, ja].
   Language: ?lang=xx > saved choice > browser languages > English. */
(function(){
var L=['cs','de','es','fr','ja'];
var D={
// header
"How it works":["Jak to funguje","So funktioniert's","Cómo funciona","Fonctionnement","使い方"],
"For owners":["Pro provozovatele","Für Betreiber","Propietarios","Pour les exploitants","オーナー向け"],
"Setup":["Instalace","Einrichtung","Instalación","Installation","セットアップ"],
"Pricing":["Cena","Preise","Precios","Tarifs","料金"],
"FAQ":["Časté dotazy","FAQ","Preguntas frecuentes","FAQ","よくある質問"],
"Sections":["Sekce","Abschnitte","Secciones","Sections","セクション"],
"Language":["Jazyk","Sprache","Idioma","Langue","言語"],
"Toggle light and dark theme":["Přepnout světlý a tmavý motiv","Helles und dunkles Design umschalten","Cambiar entre tema claro y oscuro","Basculer entre thème clair et sombre","ライト/ダークテーマを切り替え"],
"Dark":["Tmavý","Dunkel","Oscuro","Sombre","ダーク"],
"Light":["Světlý","Hell","Claro","Clair","ライト"],
// hero
"QR photo booth for AXIS cameras":["QR fotokoutek pro kamery AXIS","QR-Fotobox für AXIS-Kameras","Fotomatón QR para cámaras AXIS","Photomaton QR pour caméras AXIS","AXISカメラ用QRフォトブース"],
"Scan. Smile. <em>Check your inbox.</em>":["Naskenujte. Usmějte se. <em>Mrkněte do e-mailu.</em>","Scannen. Lächeln. <em>Postfach checken.</em>","Escanee. Sonría. <em>Revise su correo.</em>","Scannez. Souriez. <em>Ouvrez vos e-mails.</em>","スキャン。笑顔。<em>メールを確認。</em>"],
"Snapshot Booth turns an AXIS camera you already have into a photo booth. Visitors scan a printed QR code, type their e-mail, and the camera counts down and sends them the photo, with your branded frame on it.":[
 "Snapshot Booth promění kameru AXIS, kterou už máte, ve fotokoutek. Návštěvníci naskenují vytištěný QR kód, zadají svůj e-mail a kamera odpočítá a pošle jim fotku s vaším firemním rámečkem.",
 "Snapshot Booth macht aus einer vorhandenen AXIS-Kamera eine Fotobox. Besucher scannen einen gedruckten QR-Code, geben ihre E-Mail-Adresse ein, und die Kamera zählt herunter und schickt ihnen das Foto – mit Ihrem gebrandeten Rahmen.",
 "Snapshot Booth convierte una cámara AXIS que ya tiene en un fotomatón. Los visitantes escanean un código QR impreso, escriben su correo y la cámara hace la cuenta atrás y les envía la foto con el marco de su marca.",
 "Snapshot Booth transforme une caméra AXIS que vous possédez déjà en photomaton. Les visiteurs scannent un QR code imprimé, saisissent leur e-mail, puis la caméra lance le compte à rebours et leur envoie la photo avec votre cadre personnalisé.",
 "Snapshot Booth は、お手持ちのAXISカメラをフォトブースに変えます。来場者は印刷されたQRコードを読み取り、メールアドレスを入力するだけ。カメラがカウントダウンして撮影し、ブランドフレーム付きの写真をメールで届けます。"],
"Start the 7-day trial":["Vyzkoušet 7 dní zdarma","7 Tage kostenlos testen","Pruebe 7 días gratis","Essai gratuit de 7 jours","7日間の無料トライアル"],
"See the visitor flow":["Jak to vidí návštěvník","Ablauf für Besucher ansehen","Ver el recorrido del visitante","Voir le parcours visiteur","来場者の流れを見る"],
"No app":["Bez aplikace","Keine App","Sin app","Sans appli","アプリ不要"],
"No kiosk PC":["Bez kioskového PC","Kein Kiosk-PC","Sin PC de quiosco","Sans PC borne","キオスクPC不要"],
"Runs on the camera":["Běží přímo v kameře","Läuft auf der Kamera","Funciona en la cámara","Tourne sur la caméra","カメラ上で動作"],
"Preview screen showing the camera's live view with a giraffe-pattern frame and a Scan me QR code":[
 "Náhledová obrazovka s živým obrazem z kamery, rámečkem se vzorem žirafy a QR kódem Scan me",
 "Vorschaubildschirm mit dem Livebild der Kamera, einem Rahmen im Giraffenmuster und einem „Scan me“-QR-Code",
 "Pantalla de vista previa con la imagen en directo de la cámara, un marco con estampado de jirafa y un código QR «Scan me»",
 "Écran d'aperçu affichant l'image en direct de la caméra, un cadre motif girafe et un QR code « Scan me »",
 "キリン柄のフレームと「Scan me」QRコードが表示された、カメラのライブ映像のプレビュー画面"],
"Phone showing a countdown with a live preview of the camera":["Telefon s odpočtem a živým náhledem z kamery","Smartphone mit Countdown und Live-Vorschau der Kamera","Teléfono con cuenta atrás y vista previa en directo de la cámara","Téléphone affichant un compte à rebours et l'aperçu en direct de la caméra","カウントダウンとカメラのライブプレビューを表示したスマートフォン"],
// strip
"1 poster":["1 plakát","1 Poster","1 póster","1 affiche","ポスター1枚"],
"static QR, printed once":["statický QR, vytisknete jednou","statischer QR, einmal gedruckt","QR estático, se imprime una vez","QR statique, imprimé une fois","固定QR、印刷は一度だけ"],
"photo, frame included":["fotka včetně rámečku","Foto inklusive Rahmen","foto con marco incluido","photo, cadre inclus","フレーム入りの写真"],
"6 languages":["6 jazyků","6 Sprachen","6 idiomas","6 langues","6言語"],
"3 days":["3 dny","3 Tage","3 días","3 jours","3日間"],
"default photo retention":["výchozí doba uložení fotek","Standard-Aufbewahrung der Fotos","conservación predeterminada de fotos","conservation par défaut des photos","写真の標準保存期間"],
// visitor steps
"The visitor's side":["Pohled návštěvníka","Aus Besuchersicht","El lado del visitante","Côté visiteur","来場者の体験"],
"Five steps, one phone, zero downloads":["Pět kroků, jeden telefon, nic ke stažení","Fünf Schritte, ein Handy, null Downloads","Cinco pasos, un teléfono, cero descargas","Cinq étapes, un téléphone, zéro téléchargement","5ステップ、スマホ1台、ダウンロード不要"],
"This is everything a visitor sees, from the poster on the wall to the photo in their inbox.":["Tohle je vše, co návštěvník uvidí – od plakátu na zdi po fotku v e-mailu.","Das ist alles, was Besucher sehen – vom Poster an der Wand bis zum Foto im Postfach.","Esto es todo lo que ve un visitante, desde el póster en la pared hasta la foto en su bandeja de entrada.","Voici tout ce que voit un visiteur, de l'affiche au mur jusqu'à la photo dans sa boîte mail.","壁のポスターから受信箱に届く写真まで、来場者が目にするのはこれだけです。"],
"Printed poster: Take a photo, a QR code and three short instructions":["Vytištěný plakát s nadpisem Take a photo, QR kódem a třemi krátkými pokyny","Gedrucktes Poster: „Take a photo“, ein QR-Code und drei kurze Anweisungen","Póster impreso: «Take a photo», un código QR y tres instrucciones breves","Affiche imprimée : « Take a photo », un QR code et trois courtes instructions","印刷されたポスター:「Take a photo」、QRコード、3つの短い手順"],
"Scan the printed QR":["Naskenujte vytištěný QR kód","Gedruckten QR-Code scannen","Escanear el QR impreso","Scanner le QR imprimé","印刷されたQRを読み取る"],
"One poster next to the camera. The code is static and belongs to that camera, so you print it once and forget about it. A preview screen with a QR on the video is optional.":[
 "Jeden plakát vedle kamery. Kód je statický a patří k té jedné kameře, takže ho vytisknete jednou a máte hotovo. Náhledová obrazovka s QR kódem ve videu je volitelná.",
 "Ein Poster neben der Kamera. Der Code ist statisch und gehört zu genau dieser Kamera – einmal drucken und vergessen. Ein Vorschaubildschirm mit QR-Code im Video ist optional.",
 "Un póster junto a la cámara. El código es estático y pertenece a esa cámara, así que se imprime una vez y listo. Una pantalla de vista previa con el QR sobre el vídeo es opcional.",
 "Une affiche à côté de la caméra. Le code est statique et propre à cette caméra : vous l'imprimez une fois, puis vous l'oubliez. Un écran d'aperçu avec un QR sur la vidéo est optionnel.",
 "カメラの横にポスターを1枚。コードは固定で、そのカメラ専用なので、一度印刷すればそれで終わりです。映像にQRを重ねたプレビュー画面はオプションです。"],
"Any phone camera opens <code>booth.4xs.dev/i/…</code>":["Jakýkoli fotoaparát v telefonu otevře <code>booth.4xs.dev/i/…</code>","Jede Handykamera öffnet <code>booth.4xs.dev/i/…</code>","Cualquier cámara de móvil abre <code>booth.4xs.dev/i/…</code>","N'importe quel appareil photo de téléphone ouvre <code>booth.4xs.dev/i/…</code>","どのスマホのカメラでも <code>booth.4xs.dev/i/…</code> が開きます"],
"Rotating one-time QR available for the screen":["Pro obrazovku je k dispozici i rotující jednorázový QR","Für den Bildschirm gibt es auch einen wechselnden Einmal-QR","Para la pantalla hay un QR rotativo de un solo uso","QR à usage unique tournant disponible pour l'écran","画面用に切り替わるワンタイムQRも利用可能"],
"Phone form: e-mail field, background choice Giraffe or Polar bear, consent checkbox, Take my photo button":[
 "Formulář v telefonu: pole pro e-mail, volba pozadí Žirafa nebo Lední medvěd, souhlas a tlačítko Take my photo",
 "Formular auf dem Handy: E-Mail-Feld, Hintergrundwahl Giraffe oder Eisbär, Einwilligungs-Checkbox, Schaltfläche „Take my photo“",
 "Formulario en el móvil: campo de correo, elección de fondo Jirafa u Oso polar, casilla de consentimiento y botón «Take my photo»",
 "Formulaire sur téléphone : champ e-mail, choix du fond Girafe ou Ours polaire, case de consentement, bouton « Take my photo »",
 "スマホのフォーム:メール欄、背景の選択(キリン/ホッキョクグマ)、同意チェックボックス、「Take my photo」ボタン"],
"Type an e-mail, pick a background":["Zadejte e-mail a vyberte pozadí","E-Mail eingeben, Hintergrund wählen","Escribir el correo y elegir un fondo","Saisir un e-mail, choisir un fond","メールを入力して背景を選ぶ"],
"The page opens in the visitor's language. They enter an e-mail, choose one of your backgrounds and agree to a plain consent line that says when the photo will be deleted.":[
 "Stránka se otevře v jazyce návštěvníka. Ten zadá e-mail, vybere jedno z vašich pozadí a potvrdí jednoduchý souhlas s informací, kdy bude fotka smazána.",
 "Die Seite öffnet sich in der Sprache der Besucher. Sie geben eine E-Mail-Adresse ein, wählen einen Ihrer Hintergründe und stimmen einer klaren Einwilligung zu, die sagt, wann das Foto gelöscht wird.",
 "La página se abre en el idioma del visitante. Escribe su correo, elige uno de sus fondos y acepta una frase de consentimiento clara que indica cuándo se borrará la foto.",
 "La page s'ouvre dans la langue du visiteur. Il saisit un e-mail, choisit l'un de vos fonds et accepte une mention de consentement claire qui précise quand la photo sera supprimée.",
 "ページは来場者の言語で開きます。メールアドレスを入力し、背景を1つ選び、写真がいつ削除されるかを明記したシンプルな同意文に同意します。"],
"Backgrounds are your CamOverlay graphics, shown by name":["Pozadí jsou vaše grafiky z CamOverlay, zobrazené pod názvem","Hintergründe sind Ihre CamOverlay-Grafiken, angezeigt mit Namen","Los fondos son sus gráficos de CamOverlay, mostrados por nombre","Les fonds sont vos graphismes CamOverlay, affichés par leur nom","背景はCamOverlayのグラフィックで、名前で表示されます"],
"Consent text and page copy editable per language":["Text souhlasu i stránky lze upravit pro každý jazyk","Einwilligungstext und Seitentexte pro Sprache anpassbar","Texto de consentimiento y de la página editables por idioma","Texte de consentement et textes de la page modifiables par langue","同意文とページの文言は言語ごとに編集可能"],
"Phone showing You are next and a live preview from the camera":["Telefon s hláškou You are next a živým náhledem z kamery","Smartphone mit „You are next“ und Live-Vorschau der Kamera","Teléfono con «You are next» y vista previa en directo de la cámara","Téléphone affichant « You are next » et l'aperçu en direct de la caméra","「You are next」とカメラのライブプレビューを表示したスマートフォン"],
"Get ready with a live preview":["Připravte se podle živého náhledu","Mit Live-Vorschau bereit machen","Prepararse con la vista previa en directo","Se préparer avec l'aperçu en direct","ライブプレビューで準備"],
"When it's their turn, the phone shows what the camera sees, about two frames a second, so people can step into the frame before the countdown starts. Anyone who scans during a shot waits in line and sees their place.":[
 "Když je návštěvník na řadě, telefon ukazuje, co vidí kamera, zhruba dva snímky za sekundu, takže se lidé stihnou postavit do záběru ještě před odpočtem. Kdo naskenuje kód během focení, čeká ve frontě a vidí své pořadí.",
 "Sind sie an der Reihe, zeigt das Handy mit etwa zwei Bildern pro Sekunde, was die Kamera sieht – so können sich alle vor dem Countdown ins Bild stellen. Wer während einer Aufnahme scannt, wartet in der Schlange und sieht seinen Platz.",
 "Cuando le toca, el móvil muestra lo que ve la cámara, a unos dos fotogramas por segundo, para que la gente se coloque en el encuadre antes de la cuenta atrás. Quien escanee durante una foto espera en la cola y ve su posición.",
 "Quand c'est son tour, le téléphone montre ce que voit la caméra, à environ deux images par seconde, pour que chacun se place dans le cadre avant le compte à rebours. Ceux qui scannent pendant une prise patientent dans une file et voient leur rang.",
 "順番が来ると、スマホにカメラの映像が毎秒約2フレームで表示され、カウントダウン前に立ち位置を合わせられます。撮影中にスキャンした人は列に並び、自分の順番を確認できます。"],
"Preview only for the visitor whose shot is active":["Náhled vidí jen ten, kdo je právě na řadě","Vorschau nur für die Person, deren Aufnahme gerade läuft","Vista previa solo para el visitante cuya foto está activa","Aperçu réservé au visiteur dont la prise est en cours","プレビューは撮影中の来場者だけに表示"],
"One shot at a time per camera, the rest queue":["Kamera fotí vždy jen jednoho, ostatní čekají ve frontě","Eine Aufnahme pro Kamera gleichzeitig, der Rest wartet","Una foto a la vez por cámara; el resto, en cola","Une prise à la fois par caméra, les autres attendent","1台のカメラで撮影は1回ずつ、他は順番待ち"],
"Preview screen with a large countdown number 3 and a note that the camera light is blinking":[
 "Náhledová obrazovka s velkým číslem odpočtu 3 a upozorněním, že bliká světlo kamery",
 "Vorschaubildschirm mit großer Countdown-Zahl 3 und dem Hinweis, dass die Kameraleuchte blinkt",
 "Pantalla de vista previa con un gran número 3 de cuenta atrás y un aviso de que la luz de la cámara parpadea",
 "Écran d'aperçu avec un grand chiffre 3 de compte à rebours et une note indiquant que le voyant de la caméra clignote",
 "大きなカウントダウンの「3」と、カメラのランプが点滅中であることを示すプレビュー画面"],
"Phone flashing orange with countdown number 2":["Telefon blikající oranžově s číslem odpočtu 2","Smartphone blinkt orange mit Countdown-Zahl 2","Teléfono parpadeando en naranja con el número 2 de la cuenta atrás","Téléphone clignotant en orange avec le chiffre 2 du compte à rebours","オレンジに点滅し、カウントダウンの「2」を表示したスマートフォン"],
"Count down on three things at once":["Odpočet na třech místech najednou","Countdown an drei Stellen gleichzeitig","Cuenta atrás en tres sitios a la vez","Compte à rebours sur trois supports à la fois","3か所で同時にカウントダウン"],
"The number runs on the phone, on the preview screen and on the camera itself: the front status LED blinks red faster and faster, then stays on while the photo is taken. Nobody has to look at their phone to know when to smile.":[
 "Odpočet běží na telefonu, na náhledové obrazovce i na samotné kameře: přední stavová LED bliká červeně čím dál rychleji a při focení zůstane svítit. Nikdo se nemusí dívat do telefonu, aby věděl, kdy se usmát.",
 "Die Zahl läuft auf dem Handy, auf dem Vorschaubildschirm und an der Kamera selbst: Die Status-LED vorne blinkt immer schneller rot und leuchtet dann dauerhaft, während das Foto entsteht. Niemand muss aufs Handy schauen, um zu wissen, wann gelächelt wird.",
 "El número aparece en el móvil, en la pantalla de vista previa y en la propia cámara: el LED de estado frontal parpadea en rojo cada vez más rápido y se queda fijo mientras se toma la foto. Nadie tiene que mirar el móvil para saber cuándo sonreír.",
 "Le décompte s'affiche sur le téléphone, sur l'écran d'aperçu et sur la caméra elle-même : la LED d'état en façade clignote en rouge de plus en plus vite, puis reste allumée pendant la prise. Personne n'a besoin de regarder son téléphone pour savoir quand sourire.",
 "数字はスマホ、プレビュー画面、そしてカメラ本体に表示されます。前面のステータスLEDが赤く点滅してだんだん速くなり、撮影中は点灯したままに。スマホを見なくても、笑顔のタイミングがわかります。"],
"LED sequence: slow, medium, fast blink, then steady":["Sekvence LED: pomalé, střední, rychlé blikání, pak trvalé světlo","LED-Abfolge: langsames, mittleres, schnelles Blinken, dann Dauerlicht","Secuencia del LED: parpadeo lento, medio y rápido, luego fijo","Séquence LED : clignotement lent, moyen, rapide, puis fixe","LEDの順序:遅い点滅、中くらい、速い点滅、そして点灯"],
"slow → medium → fast → steady":["pomalu → středně → rychle → trvale","langsam → mittel → schnell → dauerhaft","lento → medio → rápido → fijo","lent → moyen → rapide → fixe","遅い → 中 → 速い → 点灯"],
"E-mail titled Your photo from Demo ZOO with the framed photo and a View photo button":[
 "E-mail s předmětem Your photo from Demo ZOO, fotkou v rámečku a tlačítkem View photo",
 "E-Mail „Your photo from Demo ZOO“ mit gerahmtem Foto und Schaltfläche „View photo“",
 "Correo titulado «Your photo from Demo ZOO» con la foto enmarcada y un botón «View photo»",
 "E-mail intitulé « Your photo from Demo ZOO » avec la photo encadrée et un bouton « View photo »",
 "「Your photo from Demo ZOO」という件名で、フレーム付き写真と「View photo」ボタンがあるメール"],
"Phone confirming the photo was sent":["Telefon potvrzující odeslání fotky","Smartphone bestätigt, dass das Foto gesendet wurde","Teléfono que confirma que la foto se envió","Téléphone confirmant l'envoi de la photo","写真の送信完了を表示したスマートフォン"],
"The photo lands in their inbox":["Fotka dorazí do e-mailu","Das Foto landet im Postfach","La foto llega a su bandeja de entrada","La photo arrive dans sa boîte mail","写真が受信箱に届く"],
"The visitor gets an e-mail with the full-HD photo and your frame on it, plus a link to download or delete it. Photos are removed automatically after the retention period you set.":[
 "Návštěvník dostane e-mail s fotkou ve Full HD s vaším rámečkem a s odkazem pro stažení nebo smazání. Fotky se po nastavené době uložení automaticky mažou.",
 "Besucher erhalten eine E-Mail mit dem Full-HD-Foto samt Ihrem Rahmen und einem Link zum Herunterladen oder Löschen. Fotos werden nach der von Ihnen festgelegten Aufbewahrungsdauer automatisch entfernt.",
 "El visitante recibe un correo con la foto en Full HD con su marco, además de un enlace para descargarla o borrarla. Las fotos se eliminan automáticamente tras el periodo de conservación que usted fije.",
 "Le visiteur reçoit un e-mail avec la photo Full HD et votre cadre, ainsi qu'un lien pour la télécharger ou la supprimer. Les photos sont effacées automatiquement après la durée de conservation que vous choisissez.",
 "来場者には、フレーム付きのフルHD写真と、ダウンロード・削除用のリンクが入ったメールが届きます。写真は設定した保存期間が過ぎると自動的に削除されます。"],
"Sent from <code>booth@mail.4xs.dev</code> in the visitor's language":["Odesláno z <code>booth@mail.4xs.dev</code> v jazyce návštěvníka","Versand von <code>booth@mail.4xs.dev</code> in der Sprache der Besucher","Enviado desde <code>booth@mail.4xs.dev</code> en el idioma del visitante","Envoyé depuis <code>booth@mail.4xs.dev</code> dans la langue du visiteur","<code>booth@mail.4xs.dev</code> から来場者の言語で送信"],
"\"Delete it now\" link in every e-mail":["Odkaz „Smazat hned“ v každém e-mailu","Link „Jetzt löschen“ in jeder E-Mail","Enlace «Borrar ahora» en cada correo","Lien « Supprimer maintenant » dans chaque e-mail","すべてのメールに「今すぐ削除」リンク"],
// under the hood
"Under the hood":["Pod kapotou","Unter der Haube","Por dentro","Sous le capot","仕組み"],
"The camera does the work. The cloud just passes notes.":["Práci odvede kamera. Cloud jen předává vzkazy.","Die Kamera macht die Arbeit. Die Cloud reicht nur Zettel weiter.","La cámara hace el trabajo. La nube solo pasa recados.","La caméra fait le travail. Le cloud ne fait que passer les messages.","仕事をするのはカメラ。クラウドは伝言役です。"],
"The camera sits behind your router and asks the booth server for work. No port forwarding, no video upload, no PC next to the camera.":[
 "Kamera sedí za vaším routerem a sama si říká serveru o práci. Žádné přesměrování portů, žádné nahrávání videa, žádné PC vedle kamery.",
 "Die Kamera steht hinter Ihrem Router und fragt beim Booth-Server nach Aufträgen. Keine Portweiterleitung, kein Video-Upload, kein PC neben der Kamera.",
 "La cámara está detrás de su router y pide trabajo al servidor. Sin redirección de puertos, sin subir vídeo, sin PC junto a la cámara.",
 "La caméra reste derrière votre routeur et demande du travail au serveur. Pas de redirection de ports, pas d'envoi de vidéo, pas de PC à côté de la caméra.",
 "カメラはルーターの内側から、ブースサーバーに処理を取りに行きます。ポート転送も、映像のアップロードも、カメラ横のPCも不要です。"],
"Diagram: the phone talks to booth.4xs.dev; the AXIS camera long-polls the same server, takes the photo from its own stream with CamOverlay, uploads it, and the server e-mails the visitor.":[
 "Diagram: telefon komunikuje s booth.4xs.dev; kamera AXIS se na stejný server dotazuje long-pollingem, pořídí fotku z vlastního streamu s CamOverlay, nahraje ji a server ji pošle návštěvníkovi e-mailem.",
 "Diagramm: Das Handy spricht mit booth.4xs.dev; die AXIS-Kamera fragt denselben Server per Long-Polling ab, nimmt das Foto aus ihrem eigenen Stream mit CamOverlay auf, lädt es hoch, und der Server schickt es per E-Mail an die Besucher.",
 "Diagrama: el móvil se comunica con booth.4xs.dev; la cámara AXIS consulta el mismo servidor por long-polling, toma la foto de su propio stream con CamOverlay, la sube y el servidor la envía por correo al visitante.",
 "Schéma : le téléphone communique avec booth.4xs.dev ; la caméra AXIS interroge le même serveur en long-polling, prend la photo dans son propre flux avec CamOverlay, l'envoie, puis le serveur l'adresse au visiteur par e-mail.",
 "図:スマホは booth.4xs.dev と通信し、AXISカメラは同じサーバーをロングポーリングして、CamOverlay付きの自身のストリームから写真を撮影・アップロード。サーバーが来場者にメールで送ります。"],
"Visitor's phone":["Telefon návštěvníka","Handy der Besucher","Móvil del visitante","Téléphone du visiteur","来場者のスマホ"],
"e-mail + background":["e-mail + pozadí","E-Mail + Hintergrund","correo + fondo","e-mail + fond","メール+背景"],
"status, preview, countdown":["stav, náhled, odpočet","Status, Vorschau, Countdown","estado, vista previa, 3-2-1","état, aperçu, décompte","状態・プレビュー・カウント"],
"queue · photo storage":["fronta · úložiště fotek","Warteschlange · Fotos","cola · almacén de fotos","file · stockage photos","キュー・写真保存"],
"e-mail · owner admin":["e-mail · administrace","E-Mail · Admin","correo · panel de admin","e-mail · admin","メール・管理画面"],
"AXIS camera":["Kamera AXIS","AXIS-Kamera","Cámara AXIS","Caméra AXIS","AXISカメラ"],
"Snapshot Booth app":["aplikace Snapshot Booth","Snapshot-Booth-App","app Snapshot Booth","appli Snapshot Booth","Snapshot Boothアプリ"],
"+ CamOverlay frame":["+ rámeček CamOverlay","+ CamOverlay-Rahmen","+ marco CamOverlay","+ cadre CamOverlay","+ CamOverlayフレーム"],
"scan QR → request a shot":["sken QR → žádost o fotku","QR-Scan → Foto anfordern","escanear QR → pedir foto","scan QR → demande photo","QR読取 → 撮影依頼"],
"queued · countdown · sent":["fronta · 3-2-1 · hotovo","wartet · 3-2-1 · fertig","cola · 3-2-1 · enviada","file · 3-2-1 · envoyée","待機・カウント・送信"],
"long-poll every 25 s":["long-poll každých 25 s","Long-Poll alle 25 s","long-poll cada 25 s","long-poll (25 s)","25秒ごとにロングポーリング"],
"upload 1920×1080 JPEG":["nahrání JPEG 1920×1080","Upload JPEG 1920×1080","subida JPEG 1920×1080","envoi JPEG 1920×1080","JPEG 1920×1080を送信"],
"e-mail with photo link":["e-mail s odkazem na fotku","E-Mail mit Foto-Link","correo con enlace a la foto","e-mail avec lien photo","写真リンク付きメール"],
"LED · LAN preview screen":["LED · náhledová obrazovka v LAN","LED · Vorschaubildschirm im LAN","LED · pantalla de vista previa en LAN","LED · écran d'aperçu en LAN","LED・LAN内プレビュー画面"],
"Frame burned into the photo":["Rámeček přímo ve fotce","Rahmen fest im Foto","Marco integrado en la foto","Cadre incrusté dans la photo","フレームを写真に焼き込み"],
"The photo is taken from a running 1920×1080 MJPEG stream, where CamOverlay graphics are drawn. A one-shot snapshot would leave the frame out.":[
 "Fotka se bere z běžícího MJPEG streamu 1920×1080, do kterého CamOverlay kreslí grafiku. Obyčejný jednorázový snímek by rámeček neobsahoval.",
 "Das Foto stammt aus einem laufenden 1920×1080-MJPEG-Stream, in den CamOverlay die Grafiken zeichnet. Ein einfacher Einzel-Snapshot würde den Rahmen weglassen.",
 "La foto se toma de un stream MJPEG de 1920×1080 en marcha, donde CamOverlay dibuja los gráficos. Una captura puntual dejaría fuera el marco.",
 "La photo est extraite d'un flux MJPEG 1920×1080 en cours, sur lequel CamOverlay dessine ses graphismes. Un simple instantané laisserait le cadre de côté.",
 "写真は、CamOverlayのグラフィックが描画される1920×1080のMJPEGストリームから取得します。単発のスナップショットではフレームが入りません。"],
"Works behind NAT":["Funguje za NATem","Funktioniert hinter NAT","Funciona detrás de NAT","Fonctionne derrière un NAT","NATの内側でも動作"],
"The camera long-polls the server, about 3,500 small requests a day per camera. The preview screen streams over the local network only.":[
 "Kamera se serveru dotazuje long-pollingem, zhruba 3 500 malých požadavků denně na kameru. Náhledová obrazovka streamuje jen po lokální síti.",
 "Die Kamera fragt den Server per Long-Polling ab, rund 3.500 kleine Anfragen pro Tag und Kamera. Der Vorschaubildschirm streamt nur im lokalen Netz.",
 "La cámara consulta el servidor por long-polling, unas 3.500 peticiones pequeñas al día por cámara. La pantalla de vista previa solo transmite por la red local.",
 "La caméra interroge le serveur en long-polling, environ 3 500 petites requêtes par jour et par caméra. L'écran d'aperçu ne diffuse que sur le réseau local.",
 "カメラはサーバーをロングポーリングし、1台あたり1日約3,500件の小さなリクエストを送ります。プレビュー画面の配信はローカルネットワーク内だけです。"],
"Privacy by default":["Soukromí jako výchozí stav","Datenschutz ab Werk","Privacidad por defecto","Confidentialité par défaut","プライバシー重視の初期設定"],
"Photos and addresses are deleted after 3 days (you choose). Visitors can delete their photo at any time. The QR is hidden while a photo is taken.":[
 "Fotky i adresy se mažou po 3 dnech (dobu volíte vy). Návštěvníci mohou svou fotku kdykoli smazat. Během focení je QR kód skrytý.",
 "Fotos und Adressen werden nach 3 Tagen gelöscht (Sie entscheiden). Besucher können ihr Foto jederzeit löschen. Während der Aufnahme ist der QR-Code ausgeblendet.",
 "Las fotos y direcciones se borran a los 3 días (usted elige). Los visitantes pueden borrar su foto en cualquier momento. El QR se oculta mientras se toma la foto.",
 "Photos et adresses sont supprimées après 3 jours (vous choisissez). Les visiteurs peuvent supprimer leur photo à tout moment. Le QR est masqué pendant la prise.",
 "写真とアドレスは3日後に削除されます(期間は変更可)。来場者はいつでも写真を削除できます。撮影中はQRが非表示になります。"],
// owners
"The owner's side":["Pohled provozovatele","Aus Betreibersicht","El lado del propietario","Côté exploitant","オーナーの管理"],
"Register with an e-mail. Manage every camera in one place.":["Registrace e-mailem. Všechny kamery na jednom místě.","Mit E-Mail registrieren. Alle Kameras an einem Ort verwalten.","Regístrese con un correo. Gestione todas las cámaras en un solo lugar.","Inscrivez-vous avec un e-mail. Gérez toutes vos caméras au même endroit.","メールで登録。すべてのカメラを一か所で管理。"],
"Camera settings page with status Connected, Register this camera form and camera access fields":[
 "Stránka nastavení kamery se stavem Connected, formulářem Register this camera a poli pro přístup ke kameře",
 "Kamera-Einstellungsseite mit Status „Connected“, Formular „Register this camera“ und Feldern für den Kamerazugang",
 "Página de ajustes de la cámara con estado «Connected», formulario «Register this camera» y campos de acceso a la cámara",
 "Page de réglages de la caméra avec l'état « Connected », le formulaire « Register this camera » et les champs d'accès à la caméra",
 "ステータス「Connected」、「Register this camera」フォーム、カメラのアクセス設定欄があるカメラ設定ページ"],
"On the camera":["V kameře","Auf der Kamera","En la cámara","Sur la caméra","カメラ側"],
"Install the app, type your e-mail, click the confirmation link. No tokens to copy. Add a camera user with Operator rights and you're connected.":[
 "Nainstalujte aplikaci, zadejte e-mail a klikněte na potvrzovací odkaz. Žádné tokeny ke kopírování. Přidejte uživatele kamery s právy Operator a jste připojeni.",
 "App installieren, E-Mail eingeben, Bestätigungslink anklicken. Keine Tokens zum Kopieren. Einen Kamerabenutzer mit Operator-Rechten hinzufügen – schon verbunden.",
 "Instale la app, escriba su correo y haga clic en el enlace de confirmación. Sin tokens que copiar. Añada un usuario de cámara con permisos de Operator y quedará conectado.",
 "Installez l'appli, saisissez votre e-mail, cliquez sur le lien de confirmation. Aucun jeton à copier. Ajoutez un utilisateur caméra avec les droits Operator et c'est connecté.",
 "アプリをインストールし、メールアドレスを入力して確認リンクをクリック。トークンのコピーは不要です。Operator権限のカメラユーザーを追加すれば接続完了です。"],
"Admin page listing three cameras, backgrounds Giraffe and Polar bear, per e-mail limit and retention":[
 "Administrace se třemi kamerami, pozadími Žirafa a Lední medvěd, limitem na e-mail a dobou uložení",
 "Admin-Seite mit drei Kameras, Hintergründen Giraffe und Eisbär, Limit pro E-Mail und Aufbewahrungsdauer",
 "Página de administración con tres cámaras, fondos Jirafa y Oso polar, límite por correo y conservación",
 "Page d'administration listant trois caméras, les fonds Girafe et Ours polaire, la limite par e-mail et la conservation",
 "3台のカメラ、背景(キリン/ホッキョクグマ)、メールごとの上限と保存期間を表示した管理画面"],
"In the admin":["V administraci","Im Admin-Bereich","En el panel de administración","Dans l'admin","管理画面"],
"All cameras registered with your e-mail show up together. Name backgrounds, set the default, the photos-per-e-mail limit, retention days, texts and colours.":[
 "Všechny kamery registrované na váš e-mail se zobrazí pohromadě. Pojmenujte pozadí, nastavte výchozí, limit fotek na e-mail, dobu uložení, texty a barvy.",
 "Alle mit Ihrer E-Mail registrierten Kameras erscheinen zusammen. Hintergründe benennen, Standard festlegen, Fotos pro E-Mail, Aufbewahrungstage, Texte und Farben einstellen.",
 "Todas las cámaras registradas con su correo aparecen juntas. Ponga nombre a los fondos y defina el predeterminado, el límite de fotos por correo, los días de conservación, los textos y los colores.",
 "Toutes les caméras enregistrées avec votre e-mail apparaissent ensemble. Nommez les fonds, choisissez celui par défaut, la limite de photos par e-mail, la durée de conservation, les textes et les couleurs.",
 "あなたのメールで登録したカメラがまとめて表示されます。背景の名前、デフォルト、メールごとの撮影上限、保存日数、テキストや色を設定できます。"],
// venues
"Where it fits":["Kde se hodí","Wo es passt","Dónde encaja","Où l'installer","活用シーン"],
"Anywhere people stop to remember the moment":["Všude, kde si lidé chtějí odnést vzpomínku","Überall, wo Menschen einen Moment festhalten wollen","Allí donde la gente se detiene para recordar el momento","Partout où l'on s'arrête pour garder un souvenir","思い出を残したくなる、あらゆる場所に"],
"Zoos &amp; aquariums":["Zoo a akvária","Zoos &amp; Aquarien","Zoos y acuarios","Zoos &amp; aquariums","動物園・水族館"],
"A background per enclosure. Families come back, so the limit resets every 30 days.":["Pozadí pro každý výběh. Rodiny se vracejí, proto se limit každých 30 dní obnoví.","Ein Hintergrund pro Gehege. Familien kommen wieder, deshalb setzt sich das Limit alle 30 Tage zurück.","Un fondo por recinto. Las familias vuelven, así que el límite se renueva cada 30 días.","Un fond par enclos. Les familles reviennent, donc la limite se réinitialise tous les 30 jours.","展示ごとに背景を用意。家族連れは何度も来るので、上限は30日ごとにリセットされます。"],
"Museums &amp; galleries":["Muzea a galerie","Museen &amp; Galerien","Museos y galerías","Musées &amp; galeries","博物館・美術館"],
"A souvenir shot at the signature exhibit, without a staffed photo stand.":["Fotka na památku u hlavního exponátu, bez fotostánku s obsluhou.","Ein Erinnerungsfoto am Highlight-Exponat, ohne besetzten Fotostand.","Una foto de recuerdo junto a la pieza estrella, sin un puesto de fotos con personal.","Une photo souvenir devant l'œuvre phare, sans stand photo à tenir.","目玉の展示の前で記念撮影。スタッフ付きの撮影ブースは不要です。"],
"Breweries &amp; taprooms":["Pivovary a výčepy","Brauereien &amp; Taprooms","Cervecerías y taprooms","Brasseries &amp; bars à bière","ブルワリー・タップルーム"],
"Tour groups at the brewhouse, with your logo in the frame.":["Exkurze u varny s vaším logem v rámečku.","Führungsgruppen im Sudhaus, mit Ihrem Logo im Rahmen.","Grupos de visita en la sala de cocción, con su logo en el marco.","Les groupes en visite devant la salle de brassage, avec votre logo dans le cadre.","見学ツアーの一行を醸造所で、ロゴ入りフレームで撮影。"],
"Trade shows":["Veletrhy","Messen","Ferias","Salons professionnels","展示会"],
"A booth photo that brings a visitor's e-mail with consent.":["Fotka ze stánku, která vám přinese e-mail návštěvníka i se souhlasem.","Ein Messefoto, das die E-Mail-Adresse der Besucher mit Einwilligung bringt.","Una foto en el stand que trae el correo del visitante con su consentimiento.","Une photo sur le stand qui vous apporte l'e-mail du visiteur, avec son consentement.","ブースでの写真撮影で、同意付きの来場者メールアドレスを獲得。"],
"Viewpoints &amp; ski resorts":["Vyhlídky a skiareály","Aussichtspunkte &amp; Skigebiete","Miradores y estaciones de esquí","Belvédères &amp; stations de ski","展望台・スキー場"],
"Outdoor AXIS cameras already pointed at the view.":["Venkovní kamery AXIS, které už míří na výhled.","Outdoor-AXIS-Kameras, die schon auf das Panorama zeigen.","Cámaras AXIS de exterior que ya apuntan a las vistas.","Des caméras AXIS extérieures déjà tournées vers le panorama.","すでに景色に向けられた屋外AXISカメラを活用。"],
"Weddings &amp; events":["Svatby a akce","Hochzeiten &amp; Events","Bodas y eventos","Mariages &amp; événements","結婚式・イベント"],
"A camera on a tripod, a poster on the table, no photographer queue.":["Kamera na stativu, plakát na stole, žádná fronta na fotografa.","Eine Kamera auf dem Stativ, ein Poster auf dem Tisch, keine Schlange beim Fotografen.","Una cámara en un trípode, un póster en la mesa y sin cola para el fotógrafo.","Une caméra sur trépied, une affiche sur la table, pas de file pour le photographe.","三脚にカメラ、テーブルにポスター。カメラマン待ちの列はありません。"],
// setup + pricing
"Five steps to the first photo":["Pět kroků k první fotce","Fünf Schritte zum ersten Foto","Cinco pasos hasta la primera foto","Cinq étapes jusqu'à la première photo","最初の1枚まで5ステップ"],
"Install the app on the camera":["Nainstalujte aplikaci do kamery","App auf der Kamera installieren","Instale la app en la cámara","Installez l'appli sur la caméra","カメラにアプリをインストール"],
"As an ACAP (<code>.eap</code>) or as a CamScripter package.":["Jako ACAP (<code>.eap</code>) nebo jako balíček CamScripter.","Als ACAP (<code>.eap</code>) oder als CamScripter-Paket.","Como ACAP (<code>.eap</code>) o como paquete de CamScripter.","En ACAP (<code>.eap</code>) ou en paquet CamScripter.","ACAP(<code>.eap</code>)またはCamScripterパッケージとして。"],
"Register with your e-mail":["Zaregistrujte se e-mailem","Mit Ihrer E-Mail registrieren","Regístrese con su correo","Inscrivez-vous avec votre e-mail","メールアドレスで登録"],
"Click the confirmation link. It also signs you in to the admin.":["Klikněte na potvrzovací odkaz. Zároveň vás přihlásí do administrace.","Bestätigungslink anklicken. Er meldet Sie auch im Admin-Bereich an.","Haga clic en el enlace de confirmación. También le inicia sesión en el panel.","Cliquez sur le lien de confirmation. Il vous connecte aussi à l'admin.","確認リンクをクリック。同時に管理画面にもログインします。"],
"Design the frame in CamOverlay":["Navrhněte rámeček v CamOverlay","Rahmen in CamOverlay gestalten","Diseñe el marco en CamOverlay","Créez le cadre dans CamOverlay","CamOverlayでフレームをデザイン"],
"At 1920×1080. Each background can switch one or more overlays.":["V rozlišení 1920×1080. Každé pozadí může zapnout jeden nebo více overlayů.","In 1920×1080. Jeder Hintergrund kann ein oder mehrere Overlays schalten.","A 1920×1080. Cada fondo puede activar uno o varios overlays.","En 1920×1080. Chaque fond peut activer un ou plusieurs overlays.","1920×1080で作成。背景ごとに1つ以上のオーバーレイを切り替えられます。"],
"Print the QR poster":["Vytiskněte plakát s QR","QR-Poster drucken","Imprima el póster QR","Imprimez l'affiche QR","QRポスターを印刷"],
"Optionally open the preview screen on a TV or tablet on the camera's network.":["Volitelně otevřete náhledovou obrazovku na televizi nebo tabletu v síti kamery.","Optional den Vorschaubildschirm auf einem TV oder Tablet im Kameranetz öffnen.","Opcionalmente, abra la pantalla de vista previa en una TV o tableta en la red de la cámara.","En option, ouvrez l'écran d'aperçu sur une TV ou une tablette du réseau de la caméra.","必要に応じて、カメラと同じネットワークのテレビやタブレットでプレビュー画面を開きます。"],
"Take a test photo":["Pořiďte testovací fotku","Testfoto aufnehmen","Haga una foto de prueba","Prenez une photo test","テスト撮影"],
"The settings page checks the LED and capture without sending anything.":["Stránka nastavení vyzkouší LED i snímání, aniž by cokoli odeslala.","Die Einstellungsseite prüft LED und Aufnahme, ohne etwas zu senden.","La página de ajustes comprueba el LED y la captura sin enviar nada.","La page de réglages vérifie la LED et la capture sans rien envoyer.","設定ページで、何も送信せずにLEDと撮影をチェックできます。"],
"<b>Requirements:</b> AXIS OS 12 (11.x should work), aarch64 camera (ARTPEC-8, ARTPEC-9, CV25), internet access from the camera. CamOverlay for the frame. Bench-tested on AXIS Q1656.":[
 "<b>Požadavky:</b> AXIS OS 12 (11.x by mělo fungovat), kamera aarch64 (ARTPEC-8, ARTPEC-9, CV25), přístup kamery k internetu. CamOverlay pro rámeček. Otestováno na AXIS Q1656.",
 "<b>Voraussetzungen:</b> AXIS OS 12 (11.x sollte funktionieren), aarch64-Kamera (ARTPEC-8, ARTPEC-9, CV25), Internetzugang der Kamera. CamOverlay für den Rahmen. Getestet auf AXIS Q1656.",
 "<b>Requisitos:</b> AXIS OS 12 (11.x debería funcionar), cámara aarch64 (ARTPEC-8, ARTPEC-9, CV25) y acceso a internet desde la cámara. CamOverlay para el marco. Probado en AXIS Q1656.",
 "<b>Prérequis :</b> AXIS OS 12 (11.x devrait fonctionner), caméra aarch64 (ARTPEC-8, ARTPEC-9, CV25), accès internet depuis la caméra. CamOverlay pour le cadre. Testé sur AXIS Q1656.",
 "<b>動作要件:</b>AXIS OS 12(11.xでも動作する見込み)、aarch64カメラ(ARTPEC-8、ARTPEC-9、CV25)、カメラからのインターネット接続。フレームにはCamOverlayが必要。AXIS Q1656で検証済み。"],
"$5 <small>per camera / month</small>":["$5 <small>za kameru / měsíc</small>","$5 <small>pro Kamera / Monat</small>","$5 <small>por cámara / mes</small>","5 $ <small>par caméra / mois</small>","$5 <small>カメラ1台 / 月</small>"],
"7-day free trial on your account, all cameras":["7 dní zdarma na zkoušku pro celý účet a všechny kamery","7 Tage kostenlos testen, für Ihr Konto und alle Kameras","Prueba gratuita de 7 días en su cuenta, todas las cámaras","Essai gratuit de 7 jours sur votre compte, toutes caméras","アカウント単位で7日間無料トライアル(全カメラ対象)"],
"No per-photo fees":["Žádné poplatky za fotku","Keine Gebühren pro Foto","Sin cargos por foto","Aucun frais par photo","1枚ごとの料金なし"],
"Your own e-mail is never limited":["Váš vlastní e-mail není nikdy omezen","Ihre eigene E-Mail ist nie limitiert","Su propio correo nunca tiene límite","Votre propre e-mail n'est jamais limité","ご自身のメールは上限なし"],
"Pay with PayPal or Ko-fi, cancel anytime":["Plaťte přes PayPal nebo Ko-fi, zrušit lze kdykoli","Zahlung per PayPal oder Ko-fi, jederzeit kündbar","Pague con PayPal o Ko-fi y cancele cuando quiera","Paiement par PayPal ou Ko-fi, résiliable à tout moment","PayPalまたはKo-fiで支払い、いつでも解約可能"],
"Open the admin":["Otevřít administraci","Admin öffnen","Abrir el panel","Ouvrir l'admin","管理画面を開く"],
// faq
"Questions owners ask":["Na co se provozovatelé ptají","Häufige Fragen von Betreibern","Lo que preguntan los propietarios","Les questions des exploitants","オーナーからのよくある質問"],
"Do visitors need to install anything?":["Musí si návštěvníci něco instalovat?","Müssen Besucher etwas installieren?","¿Los visitantes tienen que instalar algo?","Les visiteurs doivent-ils installer quelque chose ?","来場者は何かインストールする必要がありますか?"],
"No. The QR opens a web page. Any recent phone browser works.":["Ne. QR kód otevře webovou stránku. Stačí jakýkoli novější mobilní prohlížeč.","Nein. Der QR-Code öffnet eine Webseite. Jeder aktuelle Handy-Browser funktioniert.","No. El QR abre una página web. Sirve cualquier navegador móvil reciente.","Non. Le QR ouvre une page web. N'importe quel navigateur mobile récent convient.","いいえ。QRでWebページが開くだけです。最近のスマホのブラウザならどれでも動きます。"],
"Will my frame and logo be in the photo?":["Bude na fotce můj rámeček a logo?","Sind mein Rahmen und mein Logo auf dem Foto?","¿Saldrán mi marco y mi logo en la foto?","Mon cadre et mon logo seront-ils sur la photo ?","フレームやロゴは写真に入りますか?"],
"Yes. The photo comes from the camera's own 1920×1080 stream, which includes your CamOverlay graphics. The QR code and countdown digits are kept out of it.":[
 "Ano. Fotka pochází z vlastního streamu kamery 1920×1080, který obsahuje vaši grafiku z CamOverlay. QR kód a číslice odpočtu v ní nebudou.",
 "Ja. Das Foto stammt aus dem kameraeigenen 1920×1080-Stream, der Ihre CamOverlay-Grafiken enthält. QR-Code und Countdown-Ziffern bleiben draußen.",
 "Sí. La foto sale del propio stream de 1920×1080 de la cámara, que incluye sus gráficos de CamOverlay. El código QR y los números de la cuenta atrás quedan fuera.",
 "Oui. La photo provient du flux 1920×1080 de la caméra, qui inclut vos graphismes CamOverlay. Le QR code et les chiffres du compte à rebours n'y figurent pas.",
 "はい。写真はCamOverlayのグラフィックを含むカメラ自身の1920×1080ストリームから取得します。QRコードとカウントダウンの数字は写りません。"],
"What stops someone from taking hundreds of photos?":["Co zabrání tomu, aby si někdo pořídil stovky fotek?","Was hindert jemanden daran, Hunderte Fotos zu machen?","¿Qué impide que alguien haga cientos de fotos?","Qu'est-ce qui empêche quelqu'un de prendre des centaines de photos ?","大量に撮影されるのを防ぐには?"],
"Each e-mail address gets 3 photos per camera per rolling 30 days by default. You can change the number, reset it, and add unlimited addresses for staff.":[
 "Každá e-mailová adresa má ve výchozím nastavení 3 fotky na kameru za posledních 30 dní. Počet můžete změnit nebo vynulovat a pro personál přidat adresy bez limitu.",
 "Jede E-Mail-Adresse erhält standardmäßig 3 Fotos pro Kamera in einem gleitenden 30-Tage-Zeitraum. Sie können die Zahl ändern, zurücksetzen und unbegrenzte Adressen für Mitarbeitende hinzufügen.",
 "Por defecto, cada dirección de correo tiene 3 fotos por cámara cada 30 días móviles. Puede cambiar el número, reiniciarlo y añadir direcciones sin límite para el personal.",
 "Par défaut, chaque adresse e-mail a droit à 3 photos par caméra sur 30 jours glissants. Vous pouvez modifier ce nombre, le réinitialiser et ajouter des adresses illimitées pour le personnel.",
 "初期設定では、メールアドレスごとにカメラ1台あたり直近30日間で3枚までです。枚数の変更やリセット、スタッフ用の無制限アドレスの追加ができます。"],
"What happens when two people scan at once?":["Co když naskenují kód dva lidé najednou?","Was passiert, wenn zwei Personen gleichzeitig scannen?","¿Qué pasa si dos personas escanean a la vez?","Que se passe-t-il si deux personnes scannent en même temps ?","2人が同時にスキャンしたら?"],
"The second visitor joins a queue and sees their position. Each gets their own photo.":["Druhý návštěvník se zařadí do fronty a vidí své pořadí. Každý dostane vlastní fotku.","Die zweite Person kommt in eine Warteschlange und sieht ihre Position. Jede bekommt ihr eigenes Foto.","El segundo visitante entra en una cola y ve su posición. Cada uno recibe su propia foto.","Le second visiteur rejoint une file et voit sa position. Chacun reçoit sa propre photo.","2人目は順番待ちの列に入り、自分の順番が表示されます。それぞれが自分の写真を受け取れます。"],
"Where are photos stored, and for how long?":["Kde jsou fotky uložené a jak dlouho?","Wo werden Fotos gespeichert und wie lange?","¿Dónde se guardan las fotos y durante cuánto tiempo?","Où les photos sont-elles stockées, et combien de temps ?","写真はどこに、どれくらい保存されますか?"],
"On Cloudflare storage, for 3 days by default. You choose the retention per camera. Every e-mail has a link to delete the photo right away.":[
 "V úložišti Cloudflare, ve výchozím nastavení 3 dny. Dobu uložení nastavíte pro každou kameru zvlášť. Každý e-mail obsahuje odkaz pro okamžité smazání fotky.",
 "Im Cloudflare-Speicher, standardmäßig 3 Tage. Die Aufbewahrungsdauer legen Sie pro Kamera fest. Jede E-Mail enthält einen Link, um das Foto sofort zu löschen.",
 "En el almacenamiento de Cloudflare, 3 días por defecto. Usted elige la conservación por cámara. Cada correo incluye un enlace para borrar la foto al instante.",
 "Sur le stockage Cloudflare, 3 jours par défaut. Vous réglez la conservation par caméra. Chaque e-mail contient un lien pour supprimer la photo immédiatement.",
 "Cloudflareのストレージに、初期設定で3日間保存されます。保存期間はカメラごとに設定可能。すべてのメールに写真をすぐ削除できるリンクが付いています。"],
"Does the camera need a public IP or open ports?":["Potřebuje kamera veřejnou IP nebo otevřené porty?","Braucht die Kamera eine öffentliche IP oder offene Ports?","¿La cámara necesita una IP pública o puertos abiertos?","La caméra a-t-elle besoin d'une IP publique ou de ports ouverts ?","カメラにグローバルIPやポート開放は必要ですか?"],
"No. The camera connects out to the booth server, so it works behind any normal router or firewall that allows HTTPS.":[
 "Ne. Kamera se k serveru připojuje sama směrem ven, takže funguje za běžným routerem nebo firewallem, který povoluje HTTPS.",
 "Nein. Die Kamera baut die Verbindung zum Booth-Server selbst auf und funktioniert daher hinter jedem normalen Router oder jeder Firewall, die HTTPS erlaubt.",
 "No. La cámara se conecta hacia fuera al servidor, así que funciona detrás de cualquier router o firewall normal que permita HTTPS.",
 "Non. La caméra se connecte elle-même au serveur, elle fonctionne donc derrière tout routeur ou pare-feu classique qui autorise HTTPS.",
 "いいえ。カメラ側からサーバーへ接続するので、HTTPSを許可している一般的なルーターやファイアウォールの内側で動作します。"],
"Which cameras are supported?":["Které kamery jsou podporované?","Welche Kameras werden unterstützt?","¿Qué cámaras son compatibles?","Quelles caméras sont prises en charge ?","対応カメラは?"],
"AXIS cameras on aarch64 chips (ARTPEC-8, ARTPEC-9, CV25) with AXIS OS 12. Older ARTPEC-7 cameras are not supported by the ACAP build.":[
 "Kamery AXIS s čipy aarch64 (ARTPEC-8, ARTPEC-9, CV25) a AXIS OS 12. Starší kamery s ARTPEC-7 verze ACAP nepodporuje.",
 "AXIS-Kameras mit aarch64-Chips (ARTPEC-8, ARTPEC-9, CV25) und AXIS OS 12. Ältere ARTPEC-7-Kameras werden vom ACAP-Build nicht unterstützt.",
 "Cámaras AXIS con chips aarch64 (ARTPEC-8, ARTPEC-9, CV25) y AXIS OS 12. Las cámaras ARTPEC-7 más antiguas no son compatibles con la versión ACAP.",
 "Les caméras AXIS à puce aarch64 (ARTPEC-8, ARTPEC-9, CV25) sous AXIS OS 12. Les anciennes caméras ARTPEC-7 ne sont pas prises en charge par la version ACAP.",
 "aarch64チップ(ARTPEC-8、ARTPEC-9、CV25)搭載でAXIS OS 12のAXISカメラ。旧型のARTPEC-7カメラはACAP版では非対応です。"],
// footer
"Snapshot Booth by Pavel Kotyza · <a href=\"https://4xs.dev\">4xs.dev</a>":["Snapshot Booth od Pavla Kotyzy · <a href=\"https://4xs.dev\">4xs.dev</a>","Snapshot Booth von Pavel Kotyza · <a href=\"https://4xs.dev\">4xs.dev</a>","Snapshot Booth por Pavel Kotyza · <a href=\"https://4xs.dev\">4xs.dev</a>","Snapshot Booth par Pavel Kotyza · <a href=\"https://4xs.dev\">4xs.dev</a>","Snapshot Booth by Pavel Kotyza · <a href=\"https://4xs.dev\">4xs.dev</a>"],
"AXIS is a trademark of Axis AB. Snapshot Booth is an independent product.":["AXIS je ochranná známka společnosti Axis AB. Snapshot Booth je nezávislý produkt.","AXIS ist eine Marke der Axis AB. Snapshot Booth ist ein unabhängiges Produkt.","AXIS es una marca registrada de Axis AB. Snapshot Booth es un producto independiente.","AXIS est une marque d'Axis AB. Snapshot Booth est un produit indépendant.","AXISはAxis ABの商標です。Snapshot Boothは独立した製品です。"]
};

var KEY='sb-site-lang', cur='en';
var norm=function(s){return s.replace(/\s+/g,' ').trim()};
function tr(en,lang){var i=L.indexOf(lang),v=D[en];return (i<0||!v)?en:v[i]}
window.sbT=function(en){return tr(en,cur)};

function apply(lang){
  cur=lang;
  document.documentElement.lang=lang;
  document.querySelectorAll('h1,h2,h3,p,li,b,span,a,summary,text').forEach(function(el){
    if(el.sbEn===undefined){var k=norm(el.innerHTML);if(!D[k])return;el.sbEn=k}
    el.innerHTML=tr(el.sbEn,lang);
  });
  ['alt','aria-label'].forEach(function(at){
    document.querySelectorAll('['+at+']').forEach(function(el){
      var key='sbEn_'+at;
      if(el[key]===undefined){var k=el.getAttribute(at);if(!D[k])return;el[key]=k}
      el.setAttribute(at,tr(el[key],lang));
    });
  });
  var sel=document.getElementById('langSel');if(sel)sel.value=lang;
  if(window.sbSyncTheme)window.sbSyncTheme();
}

function detect(){
  var all=['en'].concat(L),q=(new URLSearchParams(location.search).get('lang')||'').toLowerCase();
  if(all.indexOf(q)>=0)return q;
  try{var s=localStorage.getItem(KEY);if(all.indexOf(s)>=0)return s}catch(e){}
  var nav=navigator.languages&&navigator.languages.length?navigator.languages:[navigator.language||'en'];
  for(var i=0;i<nav.length;i++){var p=String(nav[i]).toLowerCase().split('-')[0];if(all.indexOf(p)>=0)return p}
  return 'en';
}

apply(detect());
document.getElementById('langSel').addEventListener('change',function(){
  try{localStorage.setItem(KEY,this.value)}catch(e){}
  apply(this.value);
});
})();
