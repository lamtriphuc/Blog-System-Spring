import type { tagData } from "../../types";
import TagComponent from "../TagComponent/TagComponent";
import "./TagDetailsComponent.css";

type TagDetailsProps = {
  tag: tagData;
};

const TagDetailsComponent: React.FC<TagDetailsProps> = ({ tag }) => {
  return (
    <div className="tag-details p-3">
      <div className="tag-title my-2">
        <TagComponent tagName={tag.tagName} />
      </div>
      <p className="tag-description line-clamp-4">{tag.desciption}</p>
      <div className="num-of-post d-flex justify-content-between">
        <span>{tag.totalPost} bài viết</span>
        <span>Hôm nay {tag.postToday} bài viết</span>
      </div>
    </div>
  );
};

export default TagDetailsComponent;
