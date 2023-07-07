read -p "컴포넌트 이름을 입력하세요: " componentName

echo "컴포넌트 종류를 선택하세요:"
options=("1. Atoms" "2. Molecules" "3. Organisms")

select opt in "${options[@]}"; do
    case $opt in
    "1. Atoms")
        componentType="atoms"
        break
        ;;
    "2. Molecules")
        componentType="molecules"
        break
        ;;
    "3. Organisms")
        componentType="organisms"
        break
        ;;
    *) echo "잘못된 선택입니다." ;;
    esac
done

componentPath="./todolendar-front/src/components/$componentType/$componentName"

mkdir "$componentPath"

files=(
    "$componentName.tsx"
    "$componentName.scss"
    "$componentName.test.tsx"
    "$componentName.stories.tsx"
    "index.ts"
)

for file in "${files[@]}"; do
    touch "$componentPath/$file"
    case "$file" in
    "$componentName.tsx")
        cat <<EOF >"$componentPath/$file"
import { FC } from "react"

import "./$componentName.scss"

export interface ${componentName}Props {

}
const $componentName: FC<${componentName}Props> = () => {
    return <></>
}
export default $componentName
EOF
        ;;
    "$componentName.stories.tsx")
        cat <<EOF >"$componentPath/$file"
import { Meta, StoryObj } from '@storybook/react';

import $componentName, { ${componentName}Props } from './$componentName';

const meta: Meta<${componentName}Props> = {
  title: 'components/$componentType/$componentName',
  component: $componentName,
};
export default meta;

type Story = StoryObj<${componentName}Props>;

export const Default: Story = {
  args: {},
};
EOF
        ;;
    "index.ts")
        cat <<EOF >"$componentPath/$file"
export {default} from "./$componentName"
EOF
        ;;
    esac
done

echo "폴더와 파일이 생성되었습니다: $componentName"
