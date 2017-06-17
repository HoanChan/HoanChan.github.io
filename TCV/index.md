---
layout: main
title: Kiến thức tổng hợp
---

<div class="container" id="TCV" markdown="0">
    <div class="row">

        {% for item in site.data.TCV %}
            {% if forloop.index == 1 %}
                {% assign name = item %}        
            {% else %}
                <div class="col-sm-6 col-md-4 col-lg-3 mt-4">
                    <div class="card text-center">
                        <div class="card-block">
                            <h4 class="card-title">{{ item.D }}</h4>
                            <table style="width:100%">
                            {% include tcv_item.html name = name.B value = item.B %}
                            {% include tcv_item.html name = name.P value = item.P %}
                            {% include tcv_item.html name = name.Q value = item.Q %}
                            {% include tcv_item.html name = name.F value = item.F %}
                            {% include tcv_item.html name = name.M value = item.M %}
                            {% include tcv_item.html name = name.L value = item.L %}
                            </table>
                        </div>
                        <div class="card-footer">
                            <p class="card-text">{{ item.R }}</p>
                        </div>
                    </div>
                </div>
            {% endif %}
        {% endfor %}
    </div>
</div>