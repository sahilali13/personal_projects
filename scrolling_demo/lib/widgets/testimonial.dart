import 'package:flutter/material.dart';

import 'package:scroll_page_view/pager/page_controller.dart';
import 'package:scroll_page_view/pager/scroll_page_view.dart';

import './testimonial_list_item.dart';
import '../data/data.dart';
import '../data/colors.dart';

class Testimonial extends StatelessWidget {
  const Testimonial({
    super.key,
  });

  @override
  Widget build(BuildContext context) {
    var customHeight = MediaQuery.of(context).size.height;
    var customWidth = MediaQuery.of(context).size.width;
    return Expanded(
      child: Container(
        alignment: Alignment.bottomCenter,
        height: customHeight * 0.8,
        padding: EdgeInsets.only(right: customWidth * 0.05),
        child: CustomScrollView(
          physics: const PageScrollPhysics(),
          slivers: [
            SliverToBoxAdapter(
              child: Container(
                height: customHeight * 0.7,
                padding: EdgeInsets.only(top: customHeight * 0.05),
                child: ScrollPageView(
                  indicatorColor: whiteColor,
                  checkedIndicatorColor: secondaryColor,
                  scrollDirection: Axis.vertical,
                  controller: ScrollPageController(),
                  delay: const Duration(seconds: scrollDuration),
                  indicatorAlign: Alignment.centerRight,
                  children: [
                    for (final testimonial in testimonials)
                      TestimonialListItem(
                        imageUrl: testimonial.imageUrl,
                        name: testimonial.name,
                        quote: testimonial.quote,
                      ),
                  ],
                ),
              ),
            ),
          ],
        ),
      ),
    );
  }
}
