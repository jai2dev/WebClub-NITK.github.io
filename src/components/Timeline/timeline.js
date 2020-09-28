import React from "react";
import "../../styles/timeline.css";
import TimelineCard from "./timelineCard";
import Nav from "../Nav/Nav";
import Helmet from "react-helmet";
import $ from "jquery";
import { timelineWorkSheetId } from "./../../environment";
import SpreadSheetApi from "../../_services/spreadSheetApi";
import Loader from "react-loader-spinner";

class Timeline extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [],
      visible: true,
    };
    this.getData();
  }

  async getData() {
    var finalArray = await SpreadSheetApi.getWorkSheetData(timelineWorkSheetId);
    finalArray.reverse();
    this.setState({ data: finalArray });
    this.setState({ visible: false });
  }

  componentDidMount() {
    var timelineBlocks = $(".cd-timeline-block"),
      offset = 0.8;
    hideBlocks(timelineBlocks, offset);
    $(window).on("scroll", function () {
      !window.requestAnimationFrame
        ? setTimeout(function () {
            showBlocks(timelineBlocks, offset);
          }, 100)
        : window.requestAnimationFrame(function () {
            showBlocks(timelineBlocks, offset);
          });
    });
    function hideBlocks(blocks, offset) {
      blocks.each(function () {
        $(this).offset().top >
          $(window).scrollTop() + $(window).height() * offset &&
          $(this)
            .find(".cd-timeline-img, .cd-timeline-content")
            .addClass("is-hidden");
      });
    }
    function showBlocks(blocks, offset) {
      blocks.each(function () {
        $(this).offset().top <=
          $(window).scrollTop() + $(window).height() * offset &&
          $(this).find(".cd-timeline-img").hasClass("is-hidden") &&
          $(this)
            .find(".cd-timeline-img, .cd-timeline-content")
            .removeClass("is-hidden")
            .addClass("bounce-in");
      });
    }
  }

  render() {
    let content;
    if (this.state.visible) {
      content = (
        <div className="loader">
          <Loader type="TailSpin" color="#00BFFF" height={100} width={100} />
        </div>
      );
    } else {
      content = (
        <section id="cd-timeline" className="cd-container">
          {this.state.data.map((value) => {
            return (
              <TimelineCard
                title={value.title}
                body={value.description}
                date={value.date}
                link={value.link}
                key={value.title}
              />
            );
          })}
        </section>
      );
    }

    return (
      <div>
        <Helmet>
          <title>Timeline - Web Club NITK</title>
        </Helmet>
        <Nav sticky="true" transp="false" />
        {content}
      </div>
    );
  }
}

export default Timeline;
