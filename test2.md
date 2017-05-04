---
layout: default
---

<section class="intro container text-center">
    <svg viewBox="0 0 960 120">
        <symbol id="s-text">
            <text text-anchor="middle" x="50%" y="75%">Blog của Hoàn Chân</text>
        </symbol>

        <g class = "g-ants">
            <use xlink:href="#s-text" class="text-copy"></use>
            <use xlink:href="#s-text" class="text-copy"></use>
            <use xlink:href="#s-text" class="text-copy"></use>
            <use xlink:href="#s-text" class="text-copy"></use>
            <use xlink:href="#s-text" class="text-copy"></use>
        </g>
    </svg>
    <p>Bạn đã quá mệt mỏi với sách giáo khoa và giáo trình? Bạn cần một nơi có kiến thức tổng hợp? Bạn muốn xem mã nguồn thực tế của các sản phẩm từ đơn giản đến phức tạp?</p>
</section>

<section class="features container text-justify">
    <div class="row text-center">
        <div class="col-md-4 col-sm-6 hero-feature">
            <div class="thumbnail">
                {% include image.html url="dev.png" alt="Sản phẩm" style="height: 200px" %}
                <div class="caption">
                    <h3>Lập trình</h3>
                    <p>Chia sẻ các kiến thức, kĩ năng về lập trình từ cơ bản đến nâng cao.</p>
                    <p> <a href="/dev/" class="btn btn-primary">Xem ngay!</a> </p>
                </div>
            </div>
        </div>
        <div class="col-md-4 col-sm-6 hero-feature">
            <div class="thumbnail">
                {% include image.html url="projects.png" alt="Sản phẩm" style="height: 200px" %}
                <div class="caption">
                    <h3>Sản phẩm</h3>
                    <p>Một số sản phẩm nổi bật được lập trình từ C#, Pascal, Javascript ...</p>
                    <p> <a href="/projects/" class="btn btn-primary">Dùng thử ngay!</a> </p>
                </div>
            </div>
        </div>
        <div class="col-md-4 col-sm-6 hero-feature">
            <div class="thumbnail">
                {% include image.html url="knowledge.png" alt="Tri thức" style="height: 200px" %}
                <div class="caption">
                    <h3>Kiến thức</h3>
                    <p>Cung cấp các kiến thức đơn giản và cơ bản về chương trình tin học THPT.</p>
                    <p> <a href="/it/" class="btn btn-primary">Tìm hiểu ngay!</a> </p>
                </div>
            </div>
        </div>
    </div>
</section>
