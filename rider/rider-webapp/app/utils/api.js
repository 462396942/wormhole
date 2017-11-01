/*
 * <<
 * wormhole
 * ==R
 * Copyright (C) 2016 - 2017 EDP
 * ==
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * >>
 */

const productionHost = window._RIDER_PRODUCTION_HOST
const productionHostTest = window._RIDER_PRODUCTION_HOST_TEST

export default {
  login: `${productionHost}/login`,
  changepwd: `${productionHost}/changepwd`,
  projectList: `${productionHost}/admin/projects`,
  projectUserList: `${productionHost}/user/projects`,

  instance: `${productionHost}/admin/instances`,
  database: `${productionHost}/admin/databases`,
  user: `${productionHost}/admin/users`,
  namespace: `${productionHost}/admin/namespaces`,
  flow: `${productionHost}/admin/flows`,
  stream: `${productionHost}/admin/streams`,
  riderInfo: `${productionHost}/admin/riderInfo`,
  udf: `${productionHost}/admin/udfs`,

  projectAdminStream: `${productionHost}/admin/projects`,
  projectStream: `${productionHost}/user/projects`,

  projectStreamTest: `${productionHostTest}/user/projects`
}
