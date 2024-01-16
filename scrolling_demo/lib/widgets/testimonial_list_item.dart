import 'package:flutter/material.dart';
import 'package:google_fonts/google_fonts.dart';

import './parallax.dart';
import '../data/colors.dart';

class TestimonialListItem extends StatelessWidget {
  TestimonialListItem({
    super.key,
    required this.imageUrl,
    required this.name,
    required this.quote,
  });

  final String imageUrl;
  final String name;
  final String quote;
  final GlobalKey _backgroundImageKey = GlobalKey();

  @override
  Widget build(BuildContext context) {
    return Stack(
      children: [
        _buildParallaxBackground(context),
        _buildQuoteAndName(context),
      ],
    );
  }

  Widget _buildParallaxBackground(BuildContext context) {
    var customHeight = MediaQuery.of(context).size.height;
    var customWidth = MediaQuery.of(context).size.width;
    return Flow(
      delegate: ParallaxFlowDelegate(
        scrollable: Scrollable.of(context),
        listItemContext: context,
        backgroundImageKey: _backgroundImageKey,
      ),
      children: [
        Container(
          padding: EdgeInsets.only(left: customWidth * 0.02),
          child: Image(
            image: AssetImage(imageUrl),
            height: customHeight * 0.6,
            key: _backgroundImageKey,
            fit: BoxFit.fill,
          ),
        ),
      ],
    );
  }

  Widget _buildQuoteAndName(BuildContext context) {
    var customHeight = MediaQuery.of(context).size.height;
    var customWidth = MediaQuery.of(context).size.width;
    return Flow(
        delegate: ParallaxFlowDelegate(
          scrollable: Scrollable.of(context),
          listItemContext: context,
          backgroundImageKey: _backgroundImageKey,
        ),
        children: [
          Container(
            height: customHeight * 0.55,
            padding: EdgeInsets.only(
                top: customHeight * 0.17,
                left: customWidth * 0.06,
                right: customWidth * 0.05),
            child: Column(
              mainAxisAlignment: MainAxisAlignment.spaceBetween,
              crossAxisAlignment: CrossAxisAlignment.end,
              children: [
                SizedBox(
                  height: customHeight * 0.26,
                  child: Text(
                    quote,
                    overflow: TextOverflow.fade,
                    textAlign: TextAlign.end,
                    style: GoogleFonts.aBeeZee(
                      color: blackColor,
                      fontSize: customHeight * 0.035,
                      fontWeight: FontWeight.bold,
                      fontStyle: FontStyle.italic,
                    ),
                  ),
                ),
                Container(
                  padding: EdgeInsets.only(
                      right: customWidth * 0.08, bottom: customHeight * 0.02),
                  child: Text(
                    name,
                    textAlign: TextAlign.end,
                    style: GoogleFonts.aDLaMDisplay(
                      color: blackColor,
                      fontSize: customHeight * 0.045,
                      fontWeight: FontWeight.bold,
                    ),
                  ),
                ),
              ],
            ),
          ),
        ]);
  }
}
