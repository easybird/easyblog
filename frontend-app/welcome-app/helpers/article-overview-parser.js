import _ from 'lodash';
import { atomicBlockTypes } from '../composite-decorators/atomic-blocks/atomic-block-types.js';

export function parseArticleOverview(rawDraft) {
    let overview = _.cloneDeep(rawDraft);
    let moreInfoEntityKey = findMoreInfoType(overview.entityMap);

    if (moreInfoEntityKey) {
        let blockIndex = overview.blocks.findIndex(containsAtomicEntityKey(moreInfoEntityKey));
        overview.blocks.splice(blockIndex, overview.blocks.length - blockIndex);
    }

    return overview;

    function findMoreInfoType(entityMap) {
        let moreInfoTypeKey;
        Object.keys(entityMap).forEach(entityKey => {
            if (entityMap[entityKey].type === atomicBlockTypes.MORE_INFO) {
                moreInfoTypeKey = entityKey;
            }
        });
        return moreInfoTypeKey;
    }

    function entityRangeContainsEntityKey(entityKey) {
        return function entityRangeHasEntityKey(entityRange) {
            if (Number(entityRange.key) === Number(entityKey)) {
                return true;
            }
        };
    }

    function containsAtomicEntityKey(entityKey) {
        return function blockHasAtomicEntityKey(block) {
            if (block.type === 'atomic' && block.entityRanges.findIndex(entityRangeContainsEntityKey(entityKey)) !== -1) {
                return true;
            } else {
                return false;
            }
        }
    }
}
